# `mysqlMysqlConfiguration` Submodule <a name="`mysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlConfiguration <a name="MysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfiguration(Construct Scope, string Id, MysqlMysqlConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig">MysqlMysqlConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig">MysqlMysqlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables">PutInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables">ResetInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId">ResetParentConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInitVariables` <a name="PutInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables"></a>

```csharp
private void PutInitVariables(MysqlMysqlConfigurationInitVariables Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(MysqlMysqlConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---

##### `PutVariables` <a name="PutVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables"></a>

```csharp
private void PutVariables(MysqlMysqlConfigurationVariables Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitVariables` <a name="ResetInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables"></a>

```csharp
private void ResetInitVariables()
```

##### `ResetParentConfigurationId` <a name="ResetParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId"></a>

```csharp
private void ResetParentConfigurationId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVariables` <a name="ResetVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables"></a>

```csharp
private void ResetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlConfiguration.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

MysqlMysqlConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MysqlMysqlConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables">InitVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput">InitVariablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput">ParentConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput">ShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput">VariablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId">ParentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InitVariables`<sup>Required</sup> <a name="InitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables"></a>

```csharp
public MysqlMysqlConfigurationInitVariablesOutputReference InitVariables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts"></a>

```csharp
public MysqlMysqlConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables"></a>

```csharp
public MysqlMysqlConfigurationVariablesOutputReference Variables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitVariablesInput`<sup>Optional</sup> <a name="InitVariablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput"></a>

```csharp
public MysqlMysqlConfigurationInitVariables InitVariablesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `ParentConfigurationIdInput`<sup>Optional</sup> <a name="ParentConfigurationIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput"></a>

```csharp
public string ParentConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ShapeNameInput`<sup>Optional</sup> <a name="ShapeNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput"></a>

```csharp
public string ShapeNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput"></a>

```csharp
public MysqlMysqlConfigurationVariables VariablesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ParentConfigurationId`<sup>Required</sup> <a name="ParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId"></a>

```csharp
public string ParentConfigurationId { get; }
```

- *Type:* string

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlConfigurationConfig <a name="MysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ShapeName,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    MysqlMysqlConfigurationInitVariables InitVariables = null,
    string ParentConfigurationId = null,
    MysqlMysqlConfigurationTimeouts Timeouts = null,
    MysqlMysqlConfigurationVariables Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName">ShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables">InitVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | init_variables block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId">ParentConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | variables block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}.

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName"></a>

```csharp
public string ShapeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitVariables`<sup>Optional</sup> <a name="InitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables"></a>

```csharp
public MysqlMysqlConfigurationInitVariables InitVariables { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

init_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}

---

##### `ParentConfigurationId`<sup>Optional</sup> <a name="ParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId"></a>

```csharp
public string ParentConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts"></a>

```csharp
public MysqlMysqlConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables"></a>

```csharp
public MysqlMysqlConfigurationVariables Variables { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}

---

### MysqlMysqlConfigurationInitVariables <a name="MysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfigurationInitVariables {
    string LowerCaseTableNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}. |

---

##### `LowerCaseTableNames`<sup>Optional</sup> <a name="LowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames"></a>

```csharp
public string LowerCaseTableNames { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}.

---

### MysqlMysqlConfigurationTimeouts <a name="MysqlMysqlConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}.

---

### MysqlMysqlConfigurationVariables <a name="MysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfigurationVariables {
    object Autocommit = null,
    object BigTables = null,
    double BinlogExpireLogsSeconds = null,
    string BinlogRowMetadata = null,
    string BinlogRowValueOptions = null,
    object BinlogTransactionCompression = null,
    string CompletionType = null,
    double ConnectionMemoryChunkSize = null,
    string ConnectionMemoryLimit = null,
    double ConnectTimeout = null,
    string CteMaxRecursionDepth = null,
    string DefaultAuthenticationPlugin = null,
    object ForeignKeyChecks = null,
    double GeneratedRandomPasswordLength = null,
    string GlobalConnectionMemoryLimit = null,
    object GlobalConnectionMemoryTracking = null,
    string GroupReplicationConsistency = null,
    double InformationSchemaStatsExpiry = null,
    double InnodbBufferPoolDumpPct = null,
    double InnodbBufferPoolInstances = null,
    string InnodbBufferPoolSize = null,
    string InnodbDdlBufferSize = null,
    double InnodbDdlThreads = null,
    object InnodbFtEnableStopword = null,
    double InnodbFtMaxTokenSize = null,
    double InnodbFtMinTokenSize = null,
    double InnodbFtNumWordOptimize = null,
    string InnodbFtResultCacheLimit = null,
    string InnodbFtServerStopwordTable = null,
    double InnodbLockWaitTimeout = null,
    object InnodbLogWriterThreads = null,
    string InnodbMaxPurgeLag = null,
    double InnodbMaxPurgeLagDelay = null,
    string InnodbStatsPersistentSamplePages = null,
    string InnodbStatsTransientSamplePages = null,
    double InteractiveTimeout = null,
    object LocalInfile = null,
    string MandatoryRoles = null,
    double MaxAllowedPacket = null,
    string MaxBinlogCacheSize = null,
    string MaxConnectErrors = null,
    double MaxConnections = null,
    string MaxExecutionTime = null,
    string MaxHeapTableSize = null,
    double MaxPreparedStmtCount = null,
    object MysqlFirewallMode = null,
    double MysqlxConnectTimeout = null,
    double MysqlxDeflateDefaultCompressionLevel = null,
    double MysqlxDeflateMaxClientCompressionLevel = null,
    double MysqlxDocumentIdUniquePrefix = null,
    object MysqlxEnableHelloNotice = null,
    double MysqlxIdleWorkerThreadTimeout = null,
    double MysqlxInteractiveTimeout = null,
    double MysqlxLz4DefaultCompressionLevel = null,
    double MysqlxLz4MaxClientCompressionLevel = null,
    double MysqlxMaxAllowedPacket = null,
    double MysqlxMinWorkerThreads = null,
    double MysqlxReadTimeout = null,
    double MysqlxWaitTimeout = null,
    double MysqlxWriteTimeout = null,
    double MysqlxZstdDefaultCompressionLevel = null,
    double MysqlxZstdMaxClientCompressionLevel = null,
    double MysqlZstdDefaultCompressionLevel = null,
    double NetReadTimeout = null,
    double NetWriteTimeout = null,
    string ParserMaxMemSize = null,
    string QueryAllocBlockSize = null,
    string QueryPreallocSize = null,
    double RegexpTimeLimit = null,
    string SortBufferSize = null,
    string SqlMode = null,
    object SqlRequirePrimaryKey = null,
    object SqlWarnings = null,
    object ThreadPoolDedicatedListeners = null,
    double ThreadPoolMaxTransactionsLimit = null,
    string TimeZone = null,
    string TmpTableSize = null,
    string TransactionIsolation = null,
    double WaitTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit">Autocommit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables">BigTables</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds">BinlogExpireLogsSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata">BinlogRowMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions">BinlogRowValueOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression">BinlogTransactionCompression</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType">CompletionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize">ConnectionMemoryChunkSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit">ConnectionMemoryLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth">CteMaxRecursionDepth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin">DefaultAuthenticationPlugin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks">ForeignKeyChecks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength">GeneratedRandomPasswordLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit">GlobalConnectionMemoryLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking">GlobalConnectionMemoryTracking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency">GroupReplicationConsistency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct">InnodbBufferPoolDumpPct</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances">InnodbBufferPoolInstances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize">InnodbBufferPoolSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize">InnodbDdlBufferSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads">InnodbDdlThreads</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword">InnodbFtEnableStopword</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize">InnodbFtMaxTokenSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize">InnodbFtNumWordOptimize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit">InnodbFtResultCacheLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads">InnodbLogWriterThreads</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag">InnodbMaxPurgeLag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay">InnodbMaxPurgeLagDelay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages">InnodbStatsPersistentSamplePages</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages">InnodbStatsTransientSamplePages</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile">LocalInfile</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles">MandatoryRoles</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize">MaxBinlogCacheSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors">MaxConnectErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections">MaxConnections</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime">MaxExecutionTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount">MaxPreparedStmtCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode">MysqlFirewallMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout">MysqlxConnectTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel">MysqlxDeflateDefaultCompressionLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel">MysqlxDeflateMaxClientCompressionLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix">MysqlxDocumentIdUniquePrefix</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice">MysqlxEnableHelloNotice</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout">MysqlxIdleWorkerThreadTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout">MysqlxInteractiveTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel">MysqlxLz4DefaultCompressionLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel">MysqlxLz4MaxClientCompressionLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket">MysqlxMaxAllowedPacket</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads">MysqlxMinWorkerThreads</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout">MysqlxReadTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout">MysqlxWaitTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout">MysqlxWriteTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel">MysqlxZstdDefaultCompressionLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel">MysqlxZstdMaxClientCompressionLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel">MysqlZstdDefaultCompressionLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize">ParserMaxMemSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize">QueryAllocBlockSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize">QueryPreallocSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit">RegexpTimeLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize">SortBufferSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode">SqlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings">SqlWarnings</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners">ThreadPoolDedicatedListeners</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit">ThreadPoolMaxTransactionsLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize">TmpTableSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation">TransactionIsolation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}. |

---

##### `Autocommit`<sup>Optional</sup> <a name="Autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit"></a>

```csharp
public object Autocommit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}.

---

##### `BigTables`<sup>Optional</sup> <a name="BigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables"></a>

```csharp
public object BigTables { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}.

---

##### `BinlogExpireLogsSeconds`<sup>Optional</sup> <a name="BinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds"></a>

```csharp
public double BinlogExpireLogsSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}.

---

##### `BinlogRowMetadata`<sup>Optional</sup> <a name="BinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata"></a>

```csharp
public string BinlogRowMetadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}.

---

##### `BinlogRowValueOptions`<sup>Optional</sup> <a name="BinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions"></a>

```csharp
public string BinlogRowValueOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}.

---

##### `BinlogTransactionCompression`<sup>Optional</sup> <a name="BinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression"></a>

```csharp
public object BinlogTransactionCompression { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}.

---

##### `CompletionType`<sup>Optional</sup> <a name="CompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType"></a>

```csharp
public string CompletionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}.

---

##### `ConnectionMemoryChunkSize`<sup>Optional</sup> <a name="ConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize"></a>

```csharp
public double ConnectionMemoryChunkSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}.

---

##### `ConnectionMemoryLimit`<sup>Optional</sup> <a name="ConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit"></a>

```csharp
public string ConnectionMemoryLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}.

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}.

---

##### `CteMaxRecursionDepth`<sup>Optional</sup> <a name="CteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth"></a>

```csharp
public string CteMaxRecursionDepth { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}.

---

##### `DefaultAuthenticationPlugin`<sup>Optional</sup> <a name="DefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin"></a>

```csharp
public string DefaultAuthenticationPlugin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}.

---

##### `ForeignKeyChecks`<sup>Optional</sup> <a name="ForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks"></a>

```csharp
public object ForeignKeyChecks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}.

---

##### `GeneratedRandomPasswordLength`<sup>Optional</sup> <a name="GeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength"></a>

```csharp
public double GeneratedRandomPasswordLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}.

---

##### `GlobalConnectionMemoryLimit`<sup>Optional</sup> <a name="GlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit"></a>

```csharp
public string GlobalConnectionMemoryLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}.

---

##### `GlobalConnectionMemoryTracking`<sup>Optional</sup> <a name="GlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking"></a>

```csharp
public object GlobalConnectionMemoryTracking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}.

---

##### `GroupReplicationConsistency`<sup>Optional</sup> <a name="GroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency"></a>

```csharp
public string GroupReplicationConsistency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}.

---

##### `InformationSchemaStatsExpiry`<sup>Optional</sup> <a name="InformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}.

---

##### `InnodbBufferPoolDumpPct`<sup>Optional</sup> <a name="InnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct"></a>

```csharp
public double InnodbBufferPoolDumpPct { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}.

---

##### `InnodbBufferPoolInstances`<sup>Optional</sup> <a name="InnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances"></a>

```csharp
public double InnodbBufferPoolInstances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}.

---

##### `InnodbBufferPoolSize`<sup>Optional</sup> <a name="InnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize"></a>

```csharp
public string InnodbBufferPoolSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}.

---

##### `InnodbDdlBufferSize`<sup>Optional</sup> <a name="InnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize"></a>

```csharp
public string InnodbDdlBufferSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}.

---

##### `InnodbDdlThreads`<sup>Optional</sup> <a name="InnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads"></a>

```csharp
public double InnodbDdlThreads { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}.

---

##### `InnodbFtEnableStopword`<sup>Optional</sup> <a name="InnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword"></a>

```csharp
public object InnodbFtEnableStopword { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}.

---

##### `InnodbFtMaxTokenSize`<sup>Optional</sup> <a name="InnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize"></a>

```csharp
public double InnodbFtMaxTokenSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}.

---

##### `InnodbFtMinTokenSize`<sup>Optional</sup> <a name="InnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}.

---

##### `InnodbFtNumWordOptimize`<sup>Optional</sup> <a name="InnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize"></a>

```csharp
public double InnodbFtNumWordOptimize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}.

---

##### `InnodbFtResultCacheLimit`<sup>Optional</sup> <a name="InnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit"></a>

```csharp
public string InnodbFtResultCacheLimit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}.

---

##### `InnodbFtServerStopwordTable`<sup>Optional</sup> <a name="InnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}.

---

##### `InnodbLockWaitTimeout`<sup>Optional</sup> <a name="InnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}.

---

##### `InnodbLogWriterThreads`<sup>Optional</sup> <a name="InnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads"></a>

```csharp
public object InnodbLogWriterThreads { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}.

---

##### `InnodbMaxPurgeLag`<sup>Optional</sup> <a name="InnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag"></a>

```csharp
public string InnodbMaxPurgeLag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}.

---

##### `InnodbMaxPurgeLagDelay`<sup>Optional</sup> <a name="InnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay"></a>

```csharp
public double InnodbMaxPurgeLagDelay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}.

---

##### `InnodbStatsPersistentSamplePages`<sup>Optional</sup> <a name="InnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages"></a>

```csharp
public string InnodbStatsPersistentSamplePages { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}.

---

##### `InnodbStatsTransientSamplePages`<sup>Optional</sup> <a name="InnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages"></a>

```csharp
public string InnodbStatsTransientSamplePages { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}.

---

##### `InteractiveTimeout`<sup>Optional</sup> <a name="InteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}.

---

##### `LocalInfile`<sup>Optional</sup> <a name="LocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile"></a>

```csharp
public object LocalInfile { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}.

---

##### `MandatoryRoles`<sup>Optional</sup> <a name="MandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles"></a>

```csharp
public string MandatoryRoles { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}.

---

##### `MaxAllowedPacket`<sup>Optional</sup> <a name="MaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}.

---

##### `MaxBinlogCacheSize`<sup>Optional</sup> <a name="MaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize"></a>

```csharp
public string MaxBinlogCacheSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}.

---

##### `MaxConnectErrors`<sup>Optional</sup> <a name="MaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors"></a>

```csharp
public string MaxConnectErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}.

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections"></a>

```csharp
public double MaxConnections { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}.

---

##### `MaxExecutionTime`<sup>Optional</sup> <a name="MaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime"></a>

```csharp
public string MaxExecutionTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}.

---

##### `MaxHeapTableSize`<sup>Optional</sup> <a name="MaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize"></a>

```csharp
public string MaxHeapTableSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}.

---

##### `MaxPreparedStmtCount`<sup>Optional</sup> <a name="MaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount"></a>

```csharp
public double MaxPreparedStmtCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}.

---

##### `MysqlFirewallMode`<sup>Optional</sup> <a name="MysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode"></a>

```csharp
public object MysqlFirewallMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}.

---

##### `MysqlxConnectTimeout`<sup>Optional</sup> <a name="MysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout"></a>

```csharp
public double MysqlxConnectTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}.

---

##### `MysqlxDeflateDefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel"></a>

```csharp
public double MysqlxDeflateDefaultCompressionLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}.

---

##### `MysqlxDeflateMaxClientCompressionLevel`<sup>Optional</sup> <a name="MysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```csharp
public double MysqlxDeflateMaxClientCompressionLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}.

---

##### `MysqlxDocumentIdUniquePrefix`<sup>Optional</sup> <a name="MysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix"></a>

```csharp
public double MysqlxDocumentIdUniquePrefix { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}.

---

##### `MysqlxEnableHelloNotice`<sup>Optional</sup> <a name="MysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice"></a>

```csharp
public object MysqlxEnableHelloNotice { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}.

---

##### `MysqlxIdleWorkerThreadTimeout`<sup>Optional</sup> <a name="MysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout"></a>

```csharp
public double MysqlxIdleWorkerThreadTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}.

---

##### `MysqlxInteractiveTimeout`<sup>Optional</sup> <a name="MysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout"></a>

```csharp
public double MysqlxInteractiveTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}.

---

##### `MysqlxLz4DefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel"></a>

```csharp
public double MysqlxLz4DefaultCompressionLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}.

---

##### `MysqlxLz4MaxClientCompressionLevel`<sup>Optional</sup> <a name="MysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel"></a>

```csharp
public double MysqlxLz4MaxClientCompressionLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}.

---

##### `MysqlxMaxAllowedPacket`<sup>Optional</sup> <a name="MysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket"></a>

```csharp
public double MysqlxMaxAllowedPacket { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}.

---

##### `MysqlxMinWorkerThreads`<sup>Optional</sup> <a name="MysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads"></a>

```csharp
public double MysqlxMinWorkerThreads { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}.

---

##### `MysqlxReadTimeout`<sup>Optional</sup> <a name="MysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout"></a>

```csharp
public double MysqlxReadTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}.

---

##### `MysqlxWaitTimeout`<sup>Optional</sup> <a name="MysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout"></a>

```csharp
public double MysqlxWaitTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}.

---

##### `MysqlxWriteTimeout`<sup>Optional</sup> <a name="MysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout"></a>

```csharp
public double MysqlxWriteTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}.

---

##### `MysqlxZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlxZstdDefaultCompressionLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}.

---

##### `MysqlxZstdMaxClientCompressionLevel`<sup>Optional</sup> <a name="MysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel"></a>

```csharp
public double MysqlxZstdMaxClientCompressionLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}.

---

##### `MysqlZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="MysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlZstdDefaultCompressionLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}.

---

##### `NetReadTimeout`<sup>Optional</sup> <a name="NetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}.

---

##### `NetWriteTimeout`<sup>Optional</sup> <a name="NetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}.

---

##### `ParserMaxMemSize`<sup>Optional</sup> <a name="ParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize"></a>

```csharp
public string ParserMaxMemSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}.

---

##### `QueryAllocBlockSize`<sup>Optional</sup> <a name="QueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize"></a>

```csharp
public string QueryAllocBlockSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}.

---

##### `QueryPreallocSize`<sup>Optional</sup> <a name="QueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize"></a>

```csharp
public string QueryPreallocSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}.

---

##### `RegexpTimeLimit`<sup>Optional</sup> <a name="RegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit"></a>

```csharp
public double RegexpTimeLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}.

---

##### `SortBufferSize`<sup>Optional</sup> <a name="SortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize"></a>

```csharp
public string SortBufferSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}.

---

##### `SqlMode`<sup>Optional</sup> <a name="SqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode"></a>

```csharp
public string SqlMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}.

---

##### `SqlRequirePrimaryKey`<sup>Optional</sup> <a name="SqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey"></a>

```csharp
public object SqlRequirePrimaryKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}.

---

##### `SqlWarnings`<sup>Optional</sup> <a name="SqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings"></a>

```csharp
public object SqlWarnings { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}.

---

##### `ThreadPoolDedicatedListeners`<sup>Optional</sup> <a name="ThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners"></a>

```csharp
public object ThreadPoolDedicatedListeners { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}.

---

##### `ThreadPoolMaxTransactionsLimit`<sup>Optional</sup> <a name="ThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit"></a>

```csharp
public double ThreadPoolMaxTransactionsLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}.

---

##### `TmpTableSize`<sup>Optional</sup> <a name="TmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize"></a>

```csharp
public string TmpTableSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}.

---

##### `TransactionIsolation`<sup>Optional</sup> <a name="TransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation"></a>

```csharp
public string TransactionIsolation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}.

---

##### `WaitTimeout`<sup>Optional</sup> <a name="WaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlConfigurationInitVariablesOutputReference <a name="MysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfigurationInitVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames">ResetLowerCaseTableNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLowerCaseTableNames` <a name="ResetLowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames"></a>

```csharp
private void ResetLowerCaseTableNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput">LowerCaseTableNamesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">LowerCaseTableNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LowerCaseTableNamesInput`<sup>Optional</sup> <a name="LowerCaseTableNamesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput"></a>

```csharp
public string LowerCaseTableNamesInput { get; }
```

- *Type:* string

---

##### `LowerCaseTableNames`<sup>Required</sup> <a name="LowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```csharp
public string LowerCaseTableNames { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlConfigurationInitVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---


### MysqlMysqlConfigurationTimeoutsOutputReference <a name="MysqlMysqlConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MysqlMysqlConfigurationVariablesOutputReference <a name="MysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new MysqlMysqlConfigurationVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit">ResetAutocommit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables">ResetBigTables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds">ResetBinlogExpireLogsSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata">ResetBinlogRowMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions">ResetBinlogRowValueOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression">ResetBinlogTransactionCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType">ResetCompletionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize">ResetConnectionMemoryChunkSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit">ResetConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth">ResetCteMaxRecursionDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin">ResetDefaultAuthenticationPlugin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks">ResetForeignKeyChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength">ResetGeneratedRandomPasswordLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit">ResetGlobalConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking">ResetGlobalConnectionMemoryTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency">ResetGroupReplicationConsistency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry">ResetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct">ResetInnodbBufferPoolDumpPct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances">ResetInnodbBufferPoolInstances</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize">ResetInnodbBufferPoolSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize">ResetInnodbDdlBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads">ResetInnodbDdlThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword">ResetInnodbFtEnableStopword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize">ResetInnodbFtMaxTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize">ResetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize">ResetInnodbFtNumWordOptimize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit">ResetInnodbFtResultCacheLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable">ResetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout">ResetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads">ResetInnodbLogWriterThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag">ResetInnodbMaxPurgeLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay">ResetInnodbMaxPurgeLagDelay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages">ResetInnodbStatsPersistentSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages">ResetInnodbStatsTransientSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout">ResetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile">ResetLocalInfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles">ResetMandatoryRoles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket">ResetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize">ResetMaxBinlogCacheSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors">ResetMaxConnectErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime">ResetMaxExecutionTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize">ResetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount">ResetMaxPreparedStmtCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode">ResetMysqlFirewallMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout">ResetMysqlxConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel">ResetMysqlxDeflateDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel">ResetMysqlxDeflateMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix">ResetMysqlxDocumentIdUniquePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice">ResetMysqlxEnableHelloNotice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout">ResetMysqlxIdleWorkerThreadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout">ResetMysqlxInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel">ResetMysqlxLz4DefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel">ResetMysqlxLz4MaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket">ResetMysqlxMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads">ResetMysqlxMinWorkerThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout">ResetMysqlxReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout">ResetMysqlxWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout">ResetMysqlxWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel">ResetMysqlxZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel">ResetMysqlxZstdMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel">ResetMysqlZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout">ResetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout">ResetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize">ResetParserMaxMemSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize">ResetQueryAllocBlockSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize">ResetQueryPreallocSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit">ResetRegexpTimeLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize">ResetSortBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode">ResetSqlMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey">ResetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings">ResetSqlWarnings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners">ResetThreadPoolDedicatedListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit">ResetThreadPoolMaxTransactionsLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize">ResetTmpTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation">ResetTransactionIsolation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout">ResetWaitTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutocommit` <a name="ResetAutocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit"></a>

```csharp
private void ResetAutocommit()
```

##### `ResetBigTables` <a name="ResetBigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables"></a>

```csharp
private void ResetBigTables()
```

##### `ResetBinlogExpireLogsSeconds` <a name="ResetBinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds"></a>

```csharp
private void ResetBinlogExpireLogsSeconds()
```

##### `ResetBinlogRowMetadata` <a name="ResetBinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata"></a>

```csharp
private void ResetBinlogRowMetadata()
```

##### `ResetBinlogRowValueOptions` <a name="ResetBinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions"></a>

```csharp
private void ResetBinlogRowValueOptions()
```

##### `ResetBinlogTransactionCompression` <a name="ResetBinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression"></a>

```csharp
private void ResetBinlogTransactionCompression()
```

##### `ResetCompletionType` <a name="ResetCompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType"></a>

```csharp
private void ResetCompletionType()
```

##### `ResetConnectionMemoryChunkSize` <a name="ResetConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize"></a>

```csharp
private void ResetConnectionMemoryChunkSize()
```

##### `ResetConnectionMemoryLimit` <a name="ResetConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit"></a>

```csharp
private void ResetConnectionMemoryLimit()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetCteMaxRecursionDepth` <a name="ResetCteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth"></a>

```csharp
private void ResetCteMaxRecursionDepth()
```

##### `ResetDefaultAuthenticationPlugin` <a name="ResetDefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin"></a>

```csharp
private void ResetDefaultAuthenticationPlugin()
```

##### `ResetForeignKeyChecks` <a name="ResetForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks"></a>

```csharp
private void ResetForeignKeyChecks()
```

##### `ResetGeneratedRandomPasswordLength` <a name="ResetGeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength"></a>

```csharp
private void ResetGeneratedRandomPasswordLength()
```

##### `ResetGlobalConnectionMemoryLimit` <a name="ResetGlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit"></a>

```csharp
private void ResetGlobalConnectionMemoryLimit()
```

##### `ResetGlobalConnectionMemoryTracking` <a name="ResetGlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking"></a>

```csharp
private void ResetGlobalConnectionMemoryTracking()
```

##### `ResetGroupReplicationConsistency` <a name="ResetGroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency"></a>

```csharp
private void ResetGroupReplicationConsistency()
```

##### `ResetInformationSchemaStatsExpiry` <a name="ResetInformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry"></a>

```csharp
private void ResetInformationSchemaStatsExpiry()
```

##### `ResetInnodbBufferPoolDumpPct` <a name="ResetInnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct"></a>

```csharp
private void ResetInnodbBufferPoolDumpPct()
```

##### `ResetInnodbBufferPoolInstances` <a name="ResetInnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances"></a>

```csharp
private void ResetInnodbBufferPoolInstances()
```

##### `ResetInnodbBufferPoolSize` <a name="ResetInnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize"></a>

```csharp
private void ResetInnodbBufferPoolSize()
```

##### `ResetInnodbDdlBufferSize` <a name="ResetInnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize"></a>

```csharp
private void ResetInnodbDdlBufferSize()
```

##### `ResetInnodbDdlThreads` <a name="ResetInnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads"></a>

```csharp
private void ResetInnodbDdlThreads()
```

##### `ResetInnodbFtEnableStopword` <a name="ResetInnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword"></a>

```csharp
private void ResetInnodbFtEnableStopword()
```

##### `ResetInnodbFtMaxTokenSize` <a name="ResetInnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize"></a>

```csharp
private void ResetInnodbFtMaxTokenSize()
```

##### `ResetInnodbFtMinTokenSize` <a name="ResetInnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize"></a>

```csharp
private void ResetInnodbFtMinTokenSize()
```

##### `ResetInnodbFtNumWordOptimize` <a name="ResetInnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize"></a>

```csharp
private void ResetInnodbFtNumWordOptimize()
```

##### `ResetInnodbFtResultCacheLimit` <a name="ResetInnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit"></a>

```csharp
private void ResetInnodbFtResultCacheLimit()
```

##### `ResetInnodbFtServerStopwordTable` <a name="ResetInnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable"></a>

```csharp
private void ResetInnodbFtServerStopwordTable()
```

##### `ResetInnodbLockWaitTimeout` <a name="ResetInnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout"></a>

```csharp
private void ResetInnodbLockWaitTimeout()
```

##### `ResetInnodbLogWriterThreads` <a name="ResetInnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads"></a>

```csharp
private void ResetInnodbLogWriterThreads()
```

##### `ResetInnodbMaxPurgeLag` <a name="ResetInnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag"></a>

```csharp
private void ResetInnodbMaxPurgeLag()
```

##### `ResetInnodbMaxPurgeLagDelay` <a name="ResetInnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay"></a>

```csharp
private void ResetInnodbMaxPurgeLagDelay()
```

##### `ResetInnodbStatsPersistentSamplePages` <a name="ResetInnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages"></a>

```csharp
private void ResetInnodbStatsPersistentSamplePages()
```

##### `ResetInnodbStatsTransientSamplePages` <a name="ResetInnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages"></a>

```csharp
private void ResetInnodbStatsTransientSamplePages()
```

##### `ResetInteractiveTimeout` <a name="ResetInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout"></a>

```csharp
private void ResetInteractiveTimeout()
```

##### `ResetLocalInfile` <a name="ResetLocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile"></a>

```csharp
private void ResetLocalInfile()
```

##### `ResetMandatoryRoles` <a name="ResetMandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles"></a>

```csharp
private void ResetMandatoryRoles()
```

##### `ResetMaxAllowedPacket` <a name="ResetMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket"></a>

```csharp
private void ResetMaxAllowedPacket()
```

##### `ResetMaxBinlogCacheSize` <a name="ResetMaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize"></a>

```csharp
private void ResetMaxBinlogCacheSize()
```

##### `ResetMaxConnectErrors` <a name="ResetMaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors"></a>

```csharp
private void ResetMaxConnectErrors()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections"></a>

```csharp
private void ResetMaxConnections()
```

##### `ResetMaxExecutionTime` <a name="ResetMaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime"></a>

```csharp
private void ResetMaxExecutionTime()
```

##### `ResetMaxHeapTableSize` <a name="ResetMaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize"></a>

```csharp
private void ResetMaxHeapTableSize()
```

##### `ResetMaxPreparedStmtCount` <a name="ResetMaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount"></a>

```csharp
private void ResetMaxPreparedStmtCount()
```

##### `ResetMysqlFirewallMode` <a name="ResetMysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode"></a>

```csharp
private void ResetMysqlFirewallMode()
```

##### `ResetMysqlxConnectTimeout` <a name="ResetMysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout"></a>

```csharp
private void ResetMysqlxConnectTimeout()
```

##### `ResetMysqlxDeflateDefaultCompressionLevel` <a name="ResetMysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel"></a>

```csharp
private void ResetMysqlxDeflateDefaultCompressionLevel()
```

##### `ResetMysqlxDeflateMaxClientCompressionLevel` <a name="ResetMysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel"></a>

```csharp
private void ResetMysqlxDeflateMaxClientCompressionLevel()
```

##### `ResetMysqlxDocumentIdUniquePrefix` <a name="ResetMysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix"></a>

```csharp
private void ResetMysqlxDocumentIdUniquePrefix()
```

##### `ResetMysqlxEnableHelloNotice` <a name="ResetMysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice"></a>

```csharp
private void ResetMysqlxEnableHelloNotice()
```

##### `ResetMysqlxIdleWorkerThreadTimeout` <a name="ResetMysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout"></a>

```csharp
private void ResetMysqlxIdleWorkerThreadTimeout()
```

##### `ResetMysqlxInteractiveTimeout` <a name="ResetMysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout"></a>

```csharp
private void ResetMysqlxInteractiveTimeout()
```

##### `ResetMysqlxLz4DefaultCompressionLevel` <a name="ResetMysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel"></a>

```csharp
private void ResetMysqlxLz4DefaultCompressionLevel()
```

##### `ResetMysqlxLz4MaxClientCompressionLevel` <a name="ResetMysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel"></a>

```csharp
private void ResetMysqlxLz4MaxClientCompressionLevel()
```

##### `ResetMysqlxMaxAllowedPacket` <a name="ResetMysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket"></a>

```csharp
private void ResetMysqlxMaxAllowedPacket()
```

##### `ResetMysqlxMinWorkerThreads` <a name="ResetMysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads"></a>

```csharp
private void ResetMysqlxMinWorkerThreads()
```

##### `ResetMysqlxReadTimeout` <a name="ResetMysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout"></a>

```csharp
private void ResetMysqlxReadTimeout()
```

##### `ResetMysqlxWaitTimeout` <a name="ResetMysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout"></a>

```csharp
private void ResetMysqlxWaitTimeout()
```

##### `ResetMysqlxWriteTimeout` <a name="ResetMysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout"></a>

```csharp
private void ResetMysqlxWriteTimeout()
```

##### `ResetMysqlxZstdDefaultCompressionLevel` <a name="ResetMysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel"></a>

```csharp
private void ResetMysqlxZstdDefaultCompressionLevel()
```

##### `ResetMysqlxZstdMaxClientCompressionLevel` <a name="ResetMysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel"></a>

```csharp
private void ResetMysqlxZstdMaxClientCompressionLevel()
```

##### `ResetMysqlZstdDefaultCompressionLevel` <a name="ResetMysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel"></a>

```csharp
private void ResetMysqlZstdDefaultCompressionLevel()
```

##### `ResetNetReadTimeout` <a name="ResetNetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout"></a>

```csharp
private void ResetNetReadTimeout()
```

##### `ResetNetWriteTimeout` <a name="ResetNetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout"></a>

```csharp
private void ResetNetWriteTimeout()
```

##### `ResetParserMaxMemSize` <a name="ResetParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize"></a>

```csharp
private void ResetParserMaxMemSize()
```

##### `ResetQueryAllocBlockSize` <a name="ResetQueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize"></a>

```csharp
private void ResetQueryAllocBlockSize()
```

##### `ResetQueryPreallocSize` <a name="ResetQueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize"></a>

```csharp
private void ResetQueryPreallocSize()
```

##### `ResetRegexpTimeLimit` <a name="ResetRegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit"></a>

```csharp
private void ResetRegexpTimeLimit()
```

##### `ResetSortBufferSize` <a name="ResetSortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize"></a>

```csharp
private void ResetSortBufferSize()
```

##### `ResetSqlMode` <a name="ResetSqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode"></a>

```csharp
private void ResetSqlMode()
```

##### `ResetSqlRequirePrimaryKey` <a name="ResetSqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey"></a>

```csharp
private void ResetSqlRequirePrimaryKey()
```

##### `ResetSqlWarnings` <a name="ResetSqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings"></a>

```csharp
private void ResetSqlWarnings()
```

##### `ResetThreadPoolDedicatedListeners` <a name="ResetThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners"></a>

```csharp
private void ResetThreadPoolDedicatedListeners()
```

##### `ResetThreadPoolMaxTransactionsLimit` <a name="ResetThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit"></a>

```csharp
private void ResetThreadPoolMaxTransactionsLimit()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

##### `ResetTmpTableSize` <a name="ResetTmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize"></a>

```csharp
private void ResetTmpTableSize()
```

##### `ResetTransactionIsolation` <a name="ResetTransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation"></a>

```csharp
private void ResetTransactionIsolation()
```

##### `ResetWaitTimeout` <a name="ResetWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout"></a>

```csharp
private void ResetWaitTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput">AutocommitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput">BigTablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput">BinlogExpireLogsSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput">BinlogRowMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput">BinlogRowValueOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput">BinlogTransactionCompressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput">CompletionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput">ConnectionMemoryChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput">ConnectionMemoryLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput">CteMaxRecursionDepthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput">DefaultAuthenticationPluginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput">ForeignKeyChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput">GeneratedRandomPasswordLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput">GlobalConnectionMemoryLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput">GlobalConnectionMemoryTrackingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput">GroupReplicationConsistencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput">InformationSchemaStatsExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput">InnodbBufferPoolDumpPctInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput">InnodbBufferPoolInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput">InnodbBufferPoolSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput">InnodbDdlBufferSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput">InnodbDdlThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput">InnodbFtEnableStopwordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput">InnodbFtMaxTokenSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput">InnodbFtMinTokenSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput">InnodbFtNumWordOptimizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput">InnodbFtResultCacheLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput">InnodbFtServerStopwordTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput">InnodbLockWaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput">InnodbLogWriterThreadsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput">InnodbMaxPurgeLagDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput">InnodbMaxPurgeLagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput">InnodbStatsPersistentSamplePagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput">InnodbStatsTransientSamplePagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput">InteractiveTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput">LocalInfileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput">MandatoryRolesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput">MaxAllowedPacketInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput">MaxBinlogCacheSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput">MaxConnectErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput">MaxExecutionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput">MaxHeapTableSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput">MaxPreparedStmtCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput">MysqlFirewallModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput">MysqlxConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput">MysqlxDeflateDefaultCompressionLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput">MysqlxDeflateMaxClientCompressionLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput">MysqlxDocumentIdUniquePrefixInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput">MysqlxEnableHelloNoticeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput">MysqlxIdleWorkerThreadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput">MysqlxInteractiveTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput">MysqlxLz4DefaultCompressionLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput">MysqlxLz4MaxClientCompressionLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput">MysqlxMaxAllowedPacketInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput">MysqlxMinWorkerThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput">MysqlxReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput">MysqlxWaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput">MysqlxWriteTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput">MysqlxZstdDefaultCompressionLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput">MysqlxZstdMaxClientCompressionLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput">MysqlZstdDefaultCompressionLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput">NetReadTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput">NetWriteTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput">ParserMaxMemSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput">QueryAllocBlockSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput">QueryPreallocSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput">RegexpTimeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput">SortBufferSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput">SqlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput">SqlRequirePrimaryKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput">SqlWarningsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput">ThreadPoolDedicatedListenersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput">ThreadPoolMaxTransactionsLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput">TmpTableSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput">TransactionIsolationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput">WaitTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit">Autocommit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables">BigTables</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">BinlogExpireLogsSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">BinlogRowMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">BinlogRowValueOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">BinlogTransactionCompression</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType">CompletionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">ConnectionMemoryChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">ConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">CteMaxRecursionDepth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">DefaultAuthenticationPlugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">ForeignKeyChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">GeneratedRandomPasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">GlobalConnectionMemoryLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">GlobalConnectionMemoryTracking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">GroupReplicationConsistency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">InformationSchemaStatsExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">InnodbBufferPoolDumpPct</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">InnodbBufferPoolInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">InnodbBufferPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">InnodbDdlBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">InnodbDdlThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">InnodbFtEnableStopword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">InnodbFtMaxTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">InnodbFtMinTokenSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">InnodbFtNumWordOptimize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">InnodbFtResultCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">InnodbFtServerStopwordTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">InnodbLockWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">InnodbLogWriterThreads</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">InnodbMaxPurgeLag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">InnodbMaxPurgeLagDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">InnodbStatsPersistentSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">InnodbStatsTransientSamplePages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">InteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile">LocalInfile</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">MandatoryRoles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">MaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">MaxBinlogCacheSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">MaxConnectErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">MaxExecutionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">MaxHeapTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">MaxPreparedStmtCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">MysqlFirewallMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">MysqlxConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">MysqlxDeflateDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">MysqlxDeflateMaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">MysqlxDocumentIdUniquePrefix</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">MysqlxEnableHelloNotice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">MysqlxIdleWorkerThreadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">MysqlxInteractiveTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">MysqlxLz4DefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">MysqlxLz4MaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">MysqlxMaxAllowedPacket</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">MysqlxMinWorkerThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">MysqlxReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">MysqlxWaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">MysqlxWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">MysqlxZstdDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">MysqlxZstdMaxClientCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">MysqlZstdDefaultCompressionLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">NetReadTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">NetWriteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">ParserMaxMemSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">QueryAllocBlockSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">QueryPreallocSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">RegexpTimeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">SortBufferSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">SqlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">SqlRequirePrimaryKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">SqlWarnings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">ThreadPoolDedicatedListeners</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">ThreadPoolMaxTransactionsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">TmpTableSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">TransactionIsolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">WaitTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutocommitInput`<sup>Optional</sup> <a name="AutocommitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput"></a>

```csharp
public object AutocommitInput { get; }
```

- *Type:* object

---

##### `BigTablesInput`<sup>Optional</sup> <a name="BigTablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput"></a>

```csharp
public object BigTablesInput { get; }
```

- *Type:* object

---

##### `BinlogExpireLogsSecondsInput`<sup>Optional</sup> <a name="BinlogExpireLogsSecondsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput"></a>

```csharp
public double BinlogExpireLogsSecondsInput { get; }
```

- *Type:* double

---

##### `BinlogRowMetadataInput`<sup>Optional</sup> <a name="BinlogRowMetadataInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput"></a>

```csharp
public string BinlogRowMetadataInput { get; }
```

- *Type:* string

---

##### `BinlogRowValueOptionsInput`<sup>Optional</sup> <a name="BinlogRowValueOptionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput"></a>

```csharp
public string BinlogRowValueOptionsInput { get; }
```

- *Type:* string

---

##### `BinlogTransactionCompressionInput`<sup>Optional</sup> <a name="BinlogTransactionCompressionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput"></a>

```csharp
public object BinlogTransactionCompressionInput { get; }
```

- *Type:* object

---

##### `CompletionTypeInput`<sup>Optional</sup> <a name="CompletionTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput"></a>

```csharp
public string CompletionTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionMemoryChunkSizeInput`<sup>Optional</sup> <a name="ConnectionMemoryChunkSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput"></a>

```csharp
public double ConnectionMemoryChunkSizeInput { get; }
```

- *Type:* double

---

##### `ConnectionMemoryLimitInput`<sup>Optional</sup> <a name="ConnectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput"></a>

```csharp
public string ConnectionMemoryLimitInput { get; }
```

- *Type:* string

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput"></a>

```csharp
public double ConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `CteMaxRecursionDepthInput`<sup>Optional</sup> <a name="CteMaxRecursionDepthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput"></a>

```csharp
public string CteMaxRecursionDepthInput { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationPluginInput`<sup>Optional</sup> <a name="DefaultAuthenticationPluginInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput"></a>

```csharp
public string DefaultAuthenticationPluginInput { get; }
```

- *Type:* string

---

##### `ForeignKeyChecksInput`<sup>Optional</sup> <a name="ForeignKeyChecksInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput"></a>

```csharp
public object ForeignKeyChecksInput { get; }
```

- *Type:* object

---

##### `GeneratedRandomPasswordLengthInput`<sup>Optional</sup> <a name="GeneratedRandomPasswordLengthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput"></a>

```csharp
public double GeneratedRandomPasswordLengthInput { get; }
```

- *Type:* double

---

##### `GlobalConnectionMemoryLimitInput`<sup>Optional</sup> <a name="GlobalConnectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput"></a>

```csharp
public string GlobalConnectionMemoryLimitInput { get; }
```

- *Type:* string

---

##### `GlobalConnectionMemoryTrackingInput`<sup>Optional</sup> <a name="GlobalConnectionMemoryTrackingInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput"></a>

```csharp
public object GlobalConnectionMemoryTrackingInput { get; }
```

- *Type:* object

---

##### `GroupReplicationConsistencyInput`<sup>Optional</sup> <a name="GroupReplicationConsistencyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput"></a>

```csharp
public string GroupReplicationConsistencyInput { get; }
```

- *Type:* string

---

##### `InformationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="InformationSchemaStatsExpiryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```csharp
public double InformationSchemaStatsExpiryInput { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolDumpPctInput`<sup>Optional</sup> <a name="InnodbBufferPoolDumpPctInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput"></a>

```csharp
public double InnodbBufferPoolDumpPctInput { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolInstancesInput`<sup>Optional</sup> <a name="InnodbBufferPoolInstancesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput"></a>

```csharp
public double InnodbBufferPoolInstancesInput { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolSizeInput`<sup>Optional</sup> <a name="InnodbBufferPoolSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput"></a>

```csharp
public string InnodbBufferPoolSizeInput { get; }
```

- *Type:* string

---

##### `InnodbDdlBufferSizeInput`<sup>Optional</sup> <a name="InnodbDdlBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput"></a>

```csharp
public string InnodbDdlBufferSizeInput { get; }
```

- *Type:* string

---

##### `InnodbDdlThreadsInput`<sup>Optional</sup> <a name="InnodbDdlThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput"></a>

```csharp
public double InnodbDdlThreadsInput { get; }
```

- *Type:* double

---

##### `InnodbFtEnableStopwordInput`<sup>Optional</sup> <a name="InnodbFtEnableStopwordInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput"></a>

```csharp
public object InnodbFtEnableStopwordInput { get; }
```

- *Type:* object

---

##### `InnodbFtMaxTokenSizeInput`<sup>Optional</sup> <a name="InnodbFtMaxTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput"></a>

```csharp
public double InnodbFtMaxTokenSizeInput { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="InnodbFtMinTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```csharp
public double InnodbFtMinTokenSizeInput { get; }
```

- *Type:* double

---

##### `InnodbFtNumWordOptimizeInput`<sup>Optional</sup> <a name="InnodbFtNumWordOptimizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput"></a>

```csharp
public double InnodbFtNumWordOptimizeInput { get; }
```

- *Type:* double

---

##### `InnodbFtResultCacheLimitInput`<sup>Optional</sup> <a name="InnodbFtResultCacheLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput"></a>

```csharp
public string InnodbFtResultCacheLimitInput { get; }
```

- *Type:* string

---

##### `InnodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="InnodbFtServerStopwordTableInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```csharp
public string InnodbFtServerStopwordTableInput { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="InnodbLockWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```csharp
public double InnodbLockWaitTimeoutInput { get; }
```

- *Type:* double

---

##### `InnodbLogWriterThreadsInput`<sup>Optional</sup> <a name="InnodbLogWriterThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput"></a>

```csharp
public object InnodbLogWriterThreadsInput { get; }
```

- *Type:* object

---

##### `InnodbMaxPurgeLagDelayInput`<sup>Optional</sup> <a name="InnodbMaxPurgeLagDelayInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput"></a>

```csharp
public double InnodbMaxPurgeLagDelayInput { get; }
```

- *Type:* double

---

##### `InnodbMaxPurgeLagInput`<sup>Optional</sup> <a name="InnodbMaxPurgeLagInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput"></a>

```csharp
public string InnodbMaxPurgeLagInput { get; }
```

- *Type:* string

---

##### `InnodbStatsPersistentSamplePagesInput`<sup>Optional</sup> <a name="InnodbStatsPersistentSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput"></a>

```csharp
public string InnodbStatsPersistentSamplePagesInput { get; }
```

- *Type:* string

---

##### `InnodbStatsTransientSamplePagesInput`<sup>Optional</sup> <a name="InnodbStatsTransientSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput"></a>

```csharp
public string InnodbStatsTransientSamplePagesInput { get; }
```

- *Type:* string

---

##### `InteractiveTimeoutInput`<sup>Optional</sup> <a name="InteractiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput"></a>

```csharp
public double InteractiveTimeoutInput { get; }
```

- *Type:* double

---

##### `LocalInfileInput`<sup>Optional</sup> <a name="LocalInfileInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput"></a>

```csharp
public object LocalInfileInput { get; }
```

- *Type:* object

---

##### `MandatoryRolesInput`<sup>Optional</sup> <a name="MandatoryRolesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput"></a>

```csharp
public string MandatoryRolesInput { get; }
```

- *Type:* string

---

##### `MaxAllowedPacketInput`<sup>Optional</sup> <a name="MaxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput"></a>

```csharp
public double MaxAllowedPacketInput { get; }
```

- *Type:* double

---

##### `MaxBinlogCacheSizeInput`<sup>Optional</sup> <a name="MaxBinlogCacheSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput"></a>

```csharp
public string MaxBinlogCacheSizeInput { get; }
```

- *Type:* string

---

##### `MaxConnectErrorsInput`<sup>Optional</sup> <a name="MaxConnectErrorsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput"></a>

```csharp
public string MaxConnectErrorsInput { get; }
```

- *Type:* string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput"></a>

```csharp
public double MaxConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxExecutionTimeInput`<sup>Optional</sup> <a name="MaxExecutionTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput"></a>

```csharp
public string MaxExecutionTimeInput { get; }
```

- *Type:* string

---

##### `MaxHeapTableSizeInput`<sup>Optional</sup> <a name="MaxHeapTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput"></a>

```csharp
public string MaxHeapTableSizeInput { get; }
```

- *Type:* string

---

##### `MaxPreparedStmtCountInput`<sup>Optional</sup> <a name="MaxPreparedStmtCountInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput"></a>

```csharp
public double MaxPreparedStmtCountInput { get; }
```

- *Type:* double

---

##### `MysqlFirewallModeInput`<sup>Optional</sup> <a name="MysqlFirewallModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput"></a>

```csharp
public object MysqlFirewallModeInput { get; }
```

- *Type:* object

---

##### `MysqlxConnectTimeoutInput`<sup>Optional</sup> <a name="MysqlxConnectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput"></a>

```csharp
public double MysqlxConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `MysqlxDeflateDefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxDeflateDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput"></a>

```csharp
public double MysqlxDeflateDefaultCompressionLevelInput { get; }
```

- *Type:* double

---

##### `MysqlxDeflateMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxDeflateMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput"></a>

```csharp
public double MysqlxDeflateMaxClientCompressionLevelInput { get; }
```

- *Type:* double

---

##### `MysqlxDocumentIdUniquePrefixInput`<sup>Optional</sup> <a name="MysqlxDocumentIdUniquePrefixInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput"></a>

```csharp
public double MysqlxDocumentIdUniquePrefixInput { get; }
```

- *Type:* double

---

##### `MysqlxEnableHelloNoticeInput`<sup>Optional</sup> <a name="MysqlxEnableHelloNoticeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput"></a>

```csharp
public object MysqlxEnableHelloNoticeInput { get; }
```

- *Type:* object

---

##### `MysqlxIdleWorkerThreadTimeoutInput`<sup>Optional</sup> <a name="MysqlxIdleWorkerThreadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput"></a>

```csharp
public double MysqlxIdleWorkerThreadTimeoutInput { get; }
```

- *Type:* double

---

##### `MysqlxInteractiveTimeoutInput`<sup>Optional</sup> <a name="MysqlxInteractiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput"></a>

```csharp
public double MysqlxInteractiveTimeoutInput { get; }
```

- *Type:* double

---

##### `MysqlxLz4DefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxLz4DefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput"></a>

```csharp
public double MysqlxLz4DefaultCompressionLevelInput { get; }
```

- *Type:* double

---

##### `MysqlxLz4MaxClientCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxLz4MaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput"></a>

```csharp
public double MysqlxLz4MaxClientCompressionLevelInput { get; }
```

- *Type:* double

---

##### `MysqlxMaxAllowedPacketInput`<sup>Optional</sup> <a name="MysqlxMaxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput"></a>

```csharp
public double MysqlxMaxAllowedPacketInput { get; }
```

- *Type:* double

---

##### `MysqlxMinWorkerThreadsInput`<sup>Optional</sup> <a name="MysqlxMinWorkerThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput"></a>

```csharp
public double MysqlxMinWorkerThreadsInput { get; }
```

- *Type:* double

---

##### `MysqlxReadTimeoutInput`<sup>Optional</sup> <a name="MysqlxReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput"></a>

```csharp
public double MysqlxReadTimeoutInput { get; }
```

- *Type:* double

---

##### `MysqlxWaitTimeoutInput`<sup>Optional</sup> <a name="MysqlxWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput"></a>

```csharp
public double MysqlxWaitTimeoutInput { get; }
```

- *Type:* double

---

##### `MysqlxWriteTimeoutInput`<sup>Optional</sup> <a name="MysqlxWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput"></a>

```csharp
public double MysqlxWriteTimeoutInput { get; }
```

- *Type:* double

---

##### `MysqlxZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput"></a>

```csharp
public double MysqlxZstdDefaultCompressionLevelInput { get; }
```

- *Type:* double

---

##### `MysqlxZstdMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="MysqlxZstdMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput"></a>

```csharp
public double MysqlxZstdMaxClientCompressionLevelInput { get; }
```

- *Type:* double

---

##### `MysqlZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="MysqlZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput"></a>

```csharp
public double MysqlZstdDefaultCompressionLevelInput { get; }
```

- *Type:* double

---

##### `NetReadTimeoutInput`<sup>Optional</sup> <a name="NetReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput"></a>

```csharp
public double NetReadTimeoutInput { get; }
```

- *Type:* double

---

##### `NetWriteTimeoutInput`<sup>Optional</sup> <a name="NetWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput"></a>

```csharp
public double NetWriteTimeoutInput { get; }
```

- *Type:* double

---

##### `ParserMaxMemSizeInput`<sup>Optional</sup> <a name="ParserMaxMemSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput"></a>

```csharp
public string ParserMaxMemSizeInput { get; }
```

- *Type:* string

---

##### `QueryAllocBlockSizeInput`<sup>Optional</sup> <a name="QueryAllocBlockSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput"></a>

```csharp
public string QueryAllocBlockSizeInput { get; }
```

- *Type:* string

---

##### `QueryPreallocSizeInput`<sup>Optional</sup> <a name="QueryPreallocSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput"></a>

```csharp
public string QueryPreallocSizeInput { get; }
```

- *Type:* string

---

##### `RegexpTimeLimitInput`<sup>Optional</sup> <a name="RegexpTimeLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput"></a>

```csharp
public double RegexpTimeLimitInput { get; }
```

- *Type:* double

---

##### `SortBufferSizeInput`<sup>Optional</sup> <a name="SortBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput"></a>

```csharp
public string SortBufferSizeInput { get; }
```

- *Type:* string

---

##### `SqlModeInput`<sup>Optional</sup> <a name="SqlModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput"></a>

```csharp
public string SqlModeInput { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="SqlRequirePrimaryKeyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```csharp
public object SqlRequirePrimaryKeyInput { get; }
```

- *Type:* object

---

##### `SqlWarningsInput`<sup>Optional</sup> <a name="SqlWarningsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput"></a>

```csharp
public object SqlWarningsInput { get; }
```

- *Type:* object

---

##### `ThreadPoolDedicatedListenersInput`<sup>Optional</sup> <a name="ThreadPoolDedicatedListenersInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput"></a>

```csharp
public object ThreadPoolDedicatedListenersInput { get; }
```

- *Type:* object

---

##### `ThreadPoolMaxTransactionsLimitInput`<sup>Optional</sup> <a name="ThreadPoolMaxTransactionsLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput"></a>

```csharp
public double ThreadPoolMaxTransactionsLimitInput { get; }
```

- *Type:* double

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TmpTableSizeInput`<sup>Optional</sup> <a name="TmpTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput"></a>

```csharp
public string TmpTableSizeInput { get; }
```

- *Type:* string

---

##### `TransactionIsolationInput`<sup>Optional</sup> <a name="TransactionIsolationInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput"></a>

```csharp
public string TransactionIsolationInput { get; }
```

- *Type:* string

---

##### `WaitTimeoutInput`<sup>Optional</sup> <a name="WaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput"></a>

```csharp
public double WaitTimeoutInput { get; }
```

- *Type:* double

---

##### `Autocommit`<sup>Required</sup> <a name="Autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```csharp
public object Autocommit { get; }
```

- *Type:* object

---

##### `BigTables`<sup>Required</sup> <a name="BigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```csharp
public object BigTables { get; }
```

- *Type:* object

---

##### `BinlogExpireLogsSeconds`<sup>Required</sup> <a name="BinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```csharp
public double BinlogExpireLogsSeconds { get; }
```

- *Type:* double

---

##### `BinlogRowMetadata`<sup>Required</sup> <a name="BinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```csharp
public string BinlogRowMetadata { get; }
```

- *Type:* string

---

##### `BinlogRowValueOptions`<sup>Required</sup> <a name="BinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```csharp
public string BinlogRowValueOptions { get; }
```

- *Type:* string

---

##### `BinlogTransactionCompression`<sup>Required</sup> <a name="BinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```csharp
public object BinlogTransactionCompression { get; }
```

- *Type:* object

---

##### `CompletionType`<sup>Required</sup> <a name="CompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```csharp
public string CompletionType { get; }
```

- *Type:* string

---

##### `ConnectionMemoryChunkSize`<sup>Required</sup> <a name="ConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```csharp
public double ConnectionMemoryChunkSize { get; }
```

- *Type:* double

---

##### `ConnectionMemoryLimit`<sup>Required</sup> <a name="ConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```csharp
public string ConnectionMemoryLimit { get; }
```

- *Type:* string

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `CteMaxRecursionDepth`<sup>Required</sup> <a name="CteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```csharp
public string CteMaxRecursionDepth { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationPlugin`<sup>Required</sup> <a name="DefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```csharp
public string DefaultAuthenticationPlugin { get; }
```

- *Type:* string

---

##### `ForeignKeyChecks`<sup>Required</sup> <a name="ForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```csharp
public object ForeignKeyChecks { get; }
```

- *Type:* object

---

##### `GeneratedRandomPasswordLength`<sup>Required</sup> <a name="GeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```csharp
public double GeneratedRandomPasswordLength { get; }
```

- *Type:* double

---

##### `GlobalConnectionMemoryLimit`<sup>Required</sup> <a name="GlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```csharp
public string GlobalConnectionMemoryLimit { get; }
```

- *Type:* string

---

##### `GlobalConnectionMemoryTracking`<sup>Required</sup> <a name="GlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```csharp
public object GlobalConnectionMemoryTracking { get; }
```

- *Type:* object

---

##### `GroupReplicationConsistency`<sup>Required</sup> <a name="GroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```csharp
public string GroupReplicationConsistency { get; }
```

- *Type:* string

---

##### `InformationSchemaStatsExpiry`<sup>Required</sup> <a name="InformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```csharp
public double InformationSchemaStatsExpiry { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolDumpPct`<sup>Required</sup> <a name="InnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```csharp
public double InnodbBufferPoolDumpPct { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolInstances`<sup>Required</sup> <a name="InnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```csharp
public double InnodbBufferPoolInstances { get; }
```

- *Type:* double

---

##### `InnodbBufferPoolSize`<sup>Required</sup> <a name="InnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```csharp
public string InnodbBufferPoolSize { get; }
```

- *Type:* string

---

##### `InnodbDdlBufferSize`<sup>Required</sup> <a name="InnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```csharp
public string InnodbDdlBufferSize { get; }
```

- *Type:* string

---

##### `InnodbDdlThreads`<sup>Required</sup> <a name="InnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```csharp
public double InnodbDdlThreads { get; }
```

- *Type:* double

---

##### `InnodbFtEnableStopword`<sup>Required</sup> <a name="InnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```csharp
public object InnodbFtEnableStopword { get; }
```

- *Type:* object

---

##### `InnodbFtMaxTokenSize`<sup>Required</sup> <a name="InnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```csharp
public double InnodbFtMaxTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtMinTokenSize`<sup>Required</sup> <a name="InnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```csharp
public double InnodbFtMinTokenSize { get; }
```

- *Type:* double

---

##### `InnodbFtNumWordOptimize`<sup>Required</sup> <a name="InnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```csharp
public double InnodbFtNumWordOptimize { get; }
```

- *Type:* double

---

##### `InnodbFtResultCacheLimit`<sup>Required</sup> <a name="InnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```csharp
public string InnodbFtResultCacheLimit { get; }
```

- *Type:* string

---

##### `InnodbFtServerStopwordTable`<sup>Required</sup> <a name="InnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```csharp
public string InnodbFtServerStopwordTable { get; }
```

- *Type:* string

---

##### `InnodbLockWaitTimeout`<sup>Required</sup> <a name="InnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```csharp
public double InnodbLockWaitTimeout { get; }
```

- *Type:* double

---

##### `InnodbLogWriterThreads`<sup>Required</sup> <a name="InnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```csharp
public object InnodbLogWriterThreads { get; }
```

- *Type:* object

---

##### `InnodbMaxPurgeLag`<sup>Required</sup> <a name="InnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```csharp
public string InnodbMaxPurgeLag { get; }
```

- *Type:* string

---

##### `InnodbMaxPurgeLagDelay`<sup>Required</sup> <a name="InnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```csharp
public double InnodbMaxPurgeLagDelay { get; }
```

- *Type:* double

---

##### `InnodbStatsPersistentSamplePages`<sup>Required</sup> <a name="InnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```csharp
public string InnodbStatsPersistentSamplePages { get; }
```

- *Type:* string

---

##### `InnodbStatsTransientSamplePages`<sup>Required</sup> <a name="InnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```csharp
public string InnodbStatsTransientSamplePages { get; }
```

- *Type:* string

---

##### `InteractiveTimeout`<sup>Required</sup> <a name="InteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```csharp
public double InteractiveTimeout { get; }
```

- *Type:* double

---

##### `LocalInfile`<sup>Required</sup> <a name="LocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```csharp
public object LocalInfile { get; }
```

- *Type:* object

---

##### `MandatoryRoles`<sup>Required</sup> <a name="MandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```csharp
public string MandatoryRoles { get; }
```

- *Type:* string

---

##### `MaxAllowedPacket`<sup>Required</sup> <a name="MaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```csharp
public double MaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MaxBinlogCacheSize`<sup>Required</sup> <a name="MaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```csharp
public string MaxBinlogCacheSize { get; }
```

- *Type:* string

---

##### `MaxConnectErrors`<sup>Required</sup> <a name="MaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```csharp
public string MaxConnectErrors { get; }
```

- *Type:* string

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxExecutionTime`<sup>Required</sup> <a name="MaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```csharp
public string MaxExecutionTime { get; }
```

- *Type:* string

---

##### `MaxHeapTableSize`<sup>Required</sup> <a name="MaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```csharp
public string MaxHeapTableSize { get; }
```

- *Type:* string

---

##### `MaxPreparedStmtCount`<sup>Required</sup> <a name="MaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```csharp
public double MaxPreparedStmtCount { get; }
```

- *Type:* double

---

##### `MysqlFirewallMode`<sup>Required</sup> <a name="MysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```csharp
public object MysqlFirewallMode { get; }
```

- *Type:* object

---

##### `MysqlxConnectTimeout`<sup>Required</sup> <a name="MysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```csharp
public double MysqlxConnectTimeout { get; }
```

- *Type:* double

---

##### `MysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```csharp
public double MysqlxDeflateDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```csharp
public double MysqlxDeflateMaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="MysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```csharp
public double MysqlxDocumentIdUniquePrefix { get; }
```

- *Type:* double

---

##### `MysqlxEnableHelloNotice`<sup>Required</sup> <a name="MysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```csharp
public object MysqlxEnableHelloNotice { get; }
```

- *Type:* object

---

##### `MysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="MysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```csharp
public double MysqlxIdleWorkerThreadTimeout { get; }
```

- *Type:* double

---

##### `MysqlxInteractiveTimeout`<sup>Required</sup> <a name="MysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```csharp
public double MysqlxInteractiveTimeout { get; }
```

- *Type:* double

---

##### `MysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```csharp
public double MysqlxLz4DefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```csharp
public double MysqlxLz4MaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxMaxAllowedPacket`<sup>Required</sup> <a name="MysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```csharp
public double MysqlxMaxAllowedPacket { get; }
```

- *Type:* double

---

##### `MysqlxMinWorkerThreads`<sup>Required</sup> <a name="MysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```csharp
public double MysqlxMinWorkerThreads { get; }
```

- *Type:* double

---

##### `MysqlxReadTimeout`<sup>Required</sup> <a name="MysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```csharp
public double MysqlxReadTimeout { get; }
```

- *Type:* double

---

##### `MysqlxWaitTimeout`<sup>Required</sup> <a name="MysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```csharp
public double MysqlxWaitTimeout { get; }
```

- *Type:* double

---

##### `MysqlxWriteTimeout`<sup>Required</sup> <a name="MysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```csharp
public double MysqlxWriteTimeout { get; }
```

- *Type:* double

---

##### `MysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlxZstdDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="MysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```csharp
public double MysqlxZstdMaxClientCompressionLevel { get; }
```

- *Type:* double

---

##### `MysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="MysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```csharp
public double MysqlZstdDefaultCompressionLevel { get; }
```

- *Type:* double

---

##### `NetReadTimeout`<sup>Required</sup> <a name="NetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```csharp
public double NetReadTimeout { get; }
```

- *Type:* double

---

##### `NetWriteTimeout`<sup>Required</sup> <a name="NetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```csharp
public double NetWriteTimeout { get; }
```

- *Type:* double

---

##### `ParserMaxMemSize`<sup>Required</sup> <a name="ParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```csharp
public string ParserMaxMemSize { get; }
```

- *Type:* string

---

##### `QueryAllocBlockSize`<sup>Required</sup> <a name="QueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```csharp
public string QueryAllocBlockSize { get; }
```

- *Type:* string

---

##### `QueryPreallocSize`<sup>Required</sup> <a name="QueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```csharp
public string QueryPreallocSize { get; }
```

- *Type:* string

---

##### `RegexpTimeLimit`<sup>Required</sup> <a name="RegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```csharp
public double RegexpTimeLimit { get; }
```

- *Type:* double

---

##### `SortBufferSize`<sup>Required</sup> <a name="SortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```csharp
public string SortBufferSize { get; }
```

- *Type:* string

---

##### `SqlMode`<sup>Required</sup> <a name="SqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```csharp
public string SqlMode { get; }
```

- *Type:* string

---

##### `SqlRequirePrimaryKey`<sup>Required</sup> <a name="SqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```csharp
public object SqlRequirePrimaryKey { get; }
```

- *Type:* object

---

##### `SqlWarnings`<sup>Required</sup> <a name="SqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```csharp
public object SqlWarnings { get; }
```

- *Type:* object

---

##### `ThreadPoolDedicatedListeners`<sup>Required</sup> <a name="ThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```csharp
public object ThreadPoolDedicatedListeners { get; }
```

- *Type:* object

---

##### `ThreadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="ThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```csharp
public double ThreadPoolMaxTransactionsLimit { get; }
```

- *Type:* double

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TmpTableSize`<sup>Required</sup> <a name="TmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```csharp
public string TmpTableSize { get; }
```

- *Type:* string

---

##### `TransactionIsolation`<sup>Required</sup> <a name="TransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```csharp
public string TransactionIsolation { get; }
```

- *Type:* string

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```csharp
public double WaitTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```csharp
public MysqlMysqlConfigurationVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---



