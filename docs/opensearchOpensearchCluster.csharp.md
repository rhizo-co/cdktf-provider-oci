# `opensearchOpensearchCluster` Submodule <a name="`opensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOpensearchCluster <a name="OpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpensearchOpensearchCluster(Construct Scope, string Id, OpensearchOpensearchClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig">OpensearchOpensearchClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig">OpensearchOpensearchClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape">ResetDataNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape">ResetMasterNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName">ResetSecurityMasterUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash">ResetSecurityMasterUserPasswordHash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode">ResetSecurityMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(OpensearchOpensearchClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---

##### `ResetDataNodeHostBareMetalShape` <a name="ResetDataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape"></a>

```csharp
private void ResetDataNodeHostBareMetalShape()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMasterNodeHostBareMetalShape` <a name="ResetMasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape"></a>

```csharp
private void ResetMasterNodeHostBareMetalShape()
```

##### `ResetSecurityMasterUserName` <a name="ResetSecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName"></a>

```csharp
private void ResetSecurityMasterUserName()
```

##### `ResetSecurityMasterUserPasswordHash` <a name="ResetSecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash"></a>

```csharp
private void ResetSecurityMasterUserPasswordHash()
```

##### `ResetSecurityMode` <a name="ResetSecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode"></a>

```csharp
private void ResetSecurityMode()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags"></a>

```csharp
private void ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpensearchOpensearchCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpensearchOpensearchCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpensearchOpensearchCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpensearchOpensearchCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchOpensearchCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains">AvailabilityDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn">OpendashboardFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp">OpendashboardPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn">OpensearchFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp">OpensearchPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted">TimeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb">TotalStorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput">DataNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput">DataNodeHostBareMetalShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput">DataNodeHostMemoryGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput">DataNodeHostOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput">DataNodeHostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput">DataNodeStorageGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput">MasterNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput">MasterNodeHostBareMetalShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput">MasterNodeHostMemoryGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput">MasterNodeHostOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput">MasterNodeHostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput">OpendashboardNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput">OpendashboardNodeHostMemoryGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput">OpendashboardNodeHostOcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput">SecurityMasterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput">SecurityMasterUserPasswordHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput">SecurityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput">SoftwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput">SubnetCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput">SystemTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput">VcnCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput">VcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount">DataNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">DataNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb">DataNodeHostMemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount">DataNodeHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType">DataNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb">DataNodeStorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount">MasterNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">MasterNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb">MasterNodeHostMemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount">MasterNodeHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType">MasterNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount">OpendashboardNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">OpendashboardNodeHostMemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">OpendashboardNodeHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName">SecurityMasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash">SecurityMasterUserPasswordHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode">SecurityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion">SoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId">SubnetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId">VcnCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailabilityDomains`<sup>Required</sup> <a name="AvailabilityDomains" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains"></a>

```csharp
public string[] AvailabilityDomains { get; }
```

- *Type:* string[]

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `OpendashboardFqdn`<sup>Required</sup> <a name="OpendashboardFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```csharp
public string OpendashboardFqdn { get; }
```

- *Type:* string

---

##### `OpendashboardPrivateIp`<sup>Required</sup> <a name="OpendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```csharp
public string OpendashboardPrivateIp { get; }
```

- *Type:* string

---

##### `OpensearchFqdn`<sup>Required</sup> <a name="OpensearchFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn"></a>

```csharp
public string OpensearchFqdn { get; }
```

- *Type:* string

---

##### `OpensearchPrivateIp`<sup>Required</sup> <a name="OpensearchPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```csharp
public string OpensearchPrivateIp { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted"></a>

```csharp
public string TimeDeleted { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts"></a>

```csharp
public OpensearchOpensearchClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalStorageGb`<sup>Required</sup> <a name="TotalStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb"></a>

```csharp
public double TotalStorageGb { get; }
```

- *Type:* double

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DataNodeCountInput`<sup>Optional</sup> <a name="DataNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput"></a>

```csharp
public double DataNodeCountInput { get; }
```

- *Type:* double

---

##### `DataNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="DataNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput"></a>

```csharp
public string DataNodeHostBareMetalShapeInput { get; }
```

- *Type:* string

---

##### `DataNodeHostMemoryGbInput`<sup>Optional</sup> <a name="DataNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput"></a>

```csharp
public double DataNodeHostMemoryGbInput { get; }
```

- *Type:* double

---

##### `DataNodeHostOcpuCountInput`<sup>Optional</sup> <a name="DataNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput"></a>

```csharp
public double DataNodeHostOcpuCountInput { get; }
```

- *Type:* double

---

##### `DataNodeHostTypeInput`<sup>Optional</sup> <a name="DataNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput"></a>

```csharp
public string DataNodeHostTypeInput { get; }
```

- *Type:* string

---

##### `DataNodeStorageGbInput`<sup>Optional</sup> <a name="DataNodeStorageGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput"></a>

```csharp
public double DataNodeStorageGbInput { get; }
```

- *Type:* double

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MasterNodeCountInput`<sup>Optional</sup> <a name="MasterNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput"></a>

```csharp
public double MasterNodeCountInput { get; }
```

- *Type:* double

---

##### `MasterNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="MasterNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput"></a>

```csharp
public string MasterNodeHostBareMetalShapeInput { get; }
```

- *Type:* string

---

##### `MasterNodeHostMemoryGbInput`<sup>Optional</sup> <a name="MasterNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput"></a>

```csharp
public double MasterNodeHostMemoryGbInput { get; }
```

- *Type:* double

---

##### `MasterNodeHostOcpuCountInput`<sup>Optional</sup> <a name="MasterNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput"></a>

```csharp
public double MasterNodeHostOcpuCountInput { get; }
```

- *Type:* double

---

##### `MasterNodeHostTypeInput`<sup>Optional</sup> <a name="MasterNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput"></a>

```csharp
public string MasterNodeHostTypeInput { get; }
```

- *Type:* string

---

##### `OpendashboardNodeCountInput`<sup>Optional</sup> <a name="OpendashboardNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput"></a>

```csharp
public double OpendashboardNodeCountInput { get; }
```

- *Type:* double

---

##### `OpendashboardNodeHostMemoryGbInput`<sup>Optional</sup> <a name="OpendashboardNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput"></a>

```csharp
public double OpendashboardNodeHostMemoryGbInput { get; }
```

- *Type:* double

---

##### `OpendashboardNodeHostOcpuCountInput`<sup>Optional</sup> <a name="OpendashboardNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput"></a>

```csharp
public double OpendashboardNodeHostOcpuCountInput { get; }
```

- *Type:* double

---

##### `SecurityMasterUserNameInput`<sup>Optional</sup> <a name="SecurityMasterUserNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput"></a>

```csharp
public string SecurityMasterUserNameInput { get; }
```

- *Type:* string

---

##### `SecurityMasterUserPasswordHashInput`<sup>Optional</sup> <a name="SecurityMasterUserPasswordHashInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput"></a>

```csharp
public string SecurityMasterUserPasswordHashInput { get; }
```

- *Type:* string

---

##### `SecurityModeInput`<sup>Optional</sup> <a name="SecurityModeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput"></a>

```csharp
public string SecurityModeInput { get; }
```

- *Type:* string

---

##### `SoftwareVersionInput`<sup>Optional</sup> <a name="SoftwareVersionInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput"></a>

```csharp
public string SoftwareVersionInput { get; }
```

- *Type:* string

---

##### `SubnetCompartmentIdInput`<sup>Optional</sup> <a name="SubnetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput"></a>

```csharp
public string SubnetCompartmentIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VcnCompartmentIdInput`<sup>Optional</sup> <a name="VcnCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput"></a>

```csharp
public string VcnCompartmentIdInput { get; }
```

- *Type:* string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput"></a>

```csharp
public string VcnIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DataNodeCount`<sup>Required</sup> <a name="DataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount"></a>

```csharp
public double DataNodeCount { get; }
```

- *Type:* double

---

##### `DataNodeHostBareMetalShape`<sup>Required</sup> <a name="DataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```csharp
public string DataNodeHostBareMetalShape { get; }
```

- *Type:* string

---

##### `DataNodeHostMemoryGb`<sup>Required</sup> <a name="DataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```csharp
public double DataNodeHostMemoryGb { get; }
```

- *Type:* double

---

##### `DataNodeHostOcpuCount`<sup>Required</sup> <a name="DataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```csharp
public double DataNodeHostOcpuCount { get; }
```

- *Type:* double

---

##### `DataNodeHostType`<sup>Required</sup> <a name="DataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType"></a>

```csharp
public string DataNodeHostType { get; }
```

- *Type:* string

---

##### `DataNodeStorageGb`<sup>Required</sup> <a name="DataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```csharp
public double DataNodeStorageGb { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MasterNodeCount`<sup>Required</sup> <a name="MasterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount"></a>

```csharp
public double MasterNodeCount { get; }
```

- *Type:* double

---

##### `MasterNodeHostBareMetalShape`<sup>Required</sup> <a name="MasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```csharp
public string MasterNodeHostBareMetalShape { get; }
```

- *Type:* string

---

##### `MasterNodeHostMemoryGb`<sup>Required</sup> <a name="MasterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```csharp
public double MasterNodeHostMemoryGb { get; }
```

- *Type:* double

---

##### `MasterNodeHostOcpuCount`<sup>Required</sup> <a name="MasterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```csharp
public double MasterNodeHostOcpuCount { get; }
```

- *Type:* double

---

##### `MasterNodeHostType`<sup>Required</sup> <a name="MasterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType"></a>

```csharp
public string MasterNodeHostType { get; }
```

- *Type:* string

---

##### `OpendashboardNodeCount`<sup>Required</sup> <a name="OpendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```csharp
public double OpendashboardNodeCount { get; }
```

- *Type:* double

---

##### `OpendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="OpendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```csharp
public double OpendashboardNodeHostMemoryGb { get; }
```

- *Type:* double

---

##### `OpendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="OpendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```csharp
public double OpendashboardNodeHostOcpuCount { get; }
```

- *Type:* double

---

##### `SecurityMasterUserName`<sup>Required</sup> <a name="SecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName"></a>

```csharp
public string SecurityMasterUserName { get; }
```

- *Type:* string

---

##### `SecurityMasterUserPasswordHash`<sup>Required</sup> <a name="SecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```csharp
public string SecurityMasterUserPasswordHash { get; }
```

- *Type:* string

---

##### `SecurityMode`<sup>Required</sup> <a name="SecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode"></a>

```csharp
public string SecurityMode { get; }
```

- *Type:* string

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion"></a>

```csharp
public string SoftwareVersion { get; }
```

- *Type:* string

---

##### `SubnetCompartmentId`<sup>Required</sup> <a name="SubnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```csharp
public string SubnetCompartmentId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VcnCompartmentId`<sup>Required</sup> <a name="VcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```csharp
public string VcnCompartmentId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOpensearchClusterConfig <a name="OpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpensearchOpensearchClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    double DataNodeCount,
    double DataNodeHostMemoryGb,
    double DataNodeHostOcpuCount,
    string DataNodeHostType,
    double DataNodeStorageGb,
    string DisplayName,
    double MasterNodeCount,
    double MasterNodeHostMemoryGb,
    double MasterNodeHostOcpuCount,
    string MasterNodeHostType,
    double OpendashboardNodeCount,
    double OpendashboardNodeHostMemoryGb,
    double OpendashboardNodeHostOcpuCount,
    string SoftwareVersion,
    string SubnetCompartmentId,
    string SubnetId,
    string VcnCompartmentId,
    string VcnId,
    string DataNodeHostBareMetalShape = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string MasterNodeHostBareMetalShape = null,
    string SecurityMasterUserName = null,
    string SecurityMasterUserPasswordHash = null,
    string SecurityMode = null,
    System.Collections.Generic.IDictionary<string, string> SystemTags = null,
    OpensearchOpensearchClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount">DataNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb">DataNodeHostMemoryGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount">DataNodeHostOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType">DataNodeHostType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb">DataNodeStorageGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount">MasterNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb">MasterNodeHostMemoryGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount">MasterNodeHostOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType">MasterNodeHostType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount">OpendashboardNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb">OpendashboardNodeHostMemoryGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount">OpendashboardNodeHostOcpuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion">SoftwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId">SubnetCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId">VcnCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId">VcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape">DataNodeHostBareMetalShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape">MasterNodeHostBareMetalShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName">SecurityMasterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash">SecurityMasterUserPasswordHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode">SecurityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}.

---

##### `DataNodeCount`<sup>Required</sup> <a name="DataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount"></a>

```csharp
public double DataNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}.

---

##### `DataNodeHostMemoryGb`<sup>Required</sup> <a name="DataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb"></a>

```csharp
public double DataNodeHostMemoryGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}.

---

##### `DataNodeHostOcpuCount`<sup>Required</sup> <a name="DataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount"></a>

```csharp
public double DataNodeHostOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}.

---

##### `DataNodeHostType`<sup>Required</sup> <a name="DataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType"></a>

```csharp
public string DataNodeHostType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}.

---

##### `DataNodeStorageGb`<sup>Required</sup> <a name="DataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb"></a>

```csharp
public double DataNodeStorageGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}.

---

##### `MasterNodeCount`<sup>Required</sup> <a name="MasterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount"></a>

```csharp
public double MasterNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}.

---

##### `MasterNodeHostMemoryGb`<sup>Required</sup> <a name="MasterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb"></a>

```csharp
public double MasterNodeHostMemoryGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}.

---

##### `MasterNodeHostOcpuCount`<sup>Required</sup> <a name="MasterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount"></a>

```csharp
public double MasterNodeHostOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}.

---

##### `MasterNodeHostType`<sup>Required</sup> <a name="MasterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType"></a>

```csharp
public string MasterNodeHostType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}.

---

##### `OpendashboardNodeCount`<sup>Required</sup> <a name="OpendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount"></a>

```csharp
public double OpendashboardNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}.

---

##### `OpendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="OpendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb"></a>

```csharp
public double OpendashboardNodeHostMemoryGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}.

---

##### `OpendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="OpendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount"></a>

```csharp
public double OpendashboardNodeHostOcpuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}.

---

##### `SoftwareVersion`<sup>Required</sup> <a name="SoftwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion"></a>

```csharp
public string SoftwareVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}.

---

##### `SubnetCompartmentId`<sup>Required</sup> <a name="SubnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId"></a>

```csharp
public string SubnetCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}.

---

##### `VcnCompartmentId`<sup>Required</sup> <a name="VcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId"></a>

```csharp
public string VcnCompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId"></a>

```csharp
public string VcnId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}.

---

##### `DataNodeHostBareMetalShape`<sup>Optional</sup> <a name="DataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape"></a>

```csharp
public string DataNodeHostBareMetalShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MasterNodeHostBareMetalShape`<sup>Optional</sup> <a name="MasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape"></a>

```csharp
public string MasterNodeHostBareMetalShape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}.

---

##### `SecurityMasterUserName`<sup>Optional</sup> <a name="SecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName"></a>

```csharp
public string SecurityMasterUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}.

---

##### `SecurityMasterUserPasswordHash`<sup>Optional</sup> <a name="SecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash"></a>

```csharp
public string SecurityMasterUserPasswordHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}.

---

##### `SecurityMode`<sup>Optional</sup> <a name="SecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode"></a>

```csharp
public string SecurityMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}.

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts"></a>

```csharp
public OpensearchOpensearchClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}

---

### OpensearchOpensearchClusterTimeouts <a name="OpensearchOpensearchClusterTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpensearchOpensearchClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOpensearchClusterTimeoutsOutputReference <a name="OpensearchOpensearchClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpensearchOpensearchClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



