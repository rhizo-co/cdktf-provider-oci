# `logAnalyticsLogAnalyticsResourceCategoriesManagement` Submodule <a name="`logAnalyticsLogAnalyticsResourceCategoriesManagement` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsResourceCategoriesManagement <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management oci_log_analytics_log_analytics_resource_categories_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsResourceCategoriesManagement(Construct Scope, string Id, LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig">LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig">LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsResourceCategoriesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsResourceCategoriesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsResourceCategoriesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsResourceCategoriesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

LogAnalyticsLogAnalyticsResourceCategoriesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsResourceCategoriesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsResourceCategoriesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogAnalyticsLogAnalyticsResourceCategoriesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsResourceCategoriesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategoriesInput">ResourceCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategories">ResourceCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeouts"></a>

```csharp
public LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceCategoriesInput`<sup>Optional</sup> <a name="ResourceCategoriesInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategoriesInput"></a>

```csharp
public string[] ResourceCategoriesInput { get; }
```

- *Type:* string[]

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceCategories`<sup>Required</sup> <a name="ResourceCategories" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceCategories"></a>

```csharp
public string[] ResourceCategories { get; }
```

- *Type:* string[]

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Namespace,
    string[] ResourceCategories,
    string ResourceId,
    string ResourceType,
    string Id = null,
    LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#namespace LogAnalyticsLogAnalyticsResourceCategoriesManagement#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceCategories">ResourceCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_categories LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_id LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_type LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#id LogAnalyticsLogAnalyticsResourceCategoriesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#namespace LogAnalyticsLogAnalyticsResourceCategoriesManagement#namespace}.

---

##### `ResourceCategories`<sup>Required</sup> <a name="ResourceCategories" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceCategories"></a>

```csharp
public string[] ResourceCategories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_categories LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_categories}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_id LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_id}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#resource_type LogAnalyticsLogAnalyticsResourceCategoriesManagement#resource_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#id LogAnalyticsLogAnalyticsResourceCategoriesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementConfig.property.timeouts"></a>

```csharp
public LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts">LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#timeouts LogAnalyticsLogAnalyticsResourceCategoriesManagement#timeouts}

---

### LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#create LogAnalyticsLogAnalyticsResourceCategoriesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#delete LogAnalyticsLogAnalyticsResourceCategoriesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#update LogAnalyticsLogAnalyticsResourceCategoriesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#create LogAnalyticsLogAnalyticsResourceCategoriesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#delete LogAnalyticsLogAnalyticsResourceCategoriesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_resource_categories_management#update LogAnalyticsLogAnalyticsResourceCategoriesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsResourceCategoriesManagement.LogAnalyticsLogAnalyticsResourceCategoriesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



