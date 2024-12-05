# `globallyDistributedDatabasePrivateEndpoint` Submodule <a name="`globallyDistributedDatabasePrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GloballyDistributedDatabasePrivateEndpoint <a name="GloballyDistributedDatabasePrivateEndpoint" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint oci_globally_distributed_database_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabasePrivateEndpoint(Construct Scope, string Id, GloballyDistributedDatabasePrivateEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig">GloballyDistributedDatabasePrivateEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig">GloballyDistributedDatabasePrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetReinstateProxyInstanceTrigger">ResetReinstateProxyInstanceTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(GloballyDistributedDatabasePrivateEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetReinstateProxyInstanceTrigger` <a name="ResetReinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetReinstateProxyInstanceTrigger"></a>

```csharp
private void ResetReinstateProxyInstanceTrigger()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabasePrivateEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabasePrivateEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabasePrivateEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GloballyDistributedDatabasePrivateEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GloballyDistributedDatabasePrivateEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GloballyDistributedDatabasePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GloballyDistributedDatabasePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails">LifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId">ProxyComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases">ShardedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference">GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTriggerInput">ReinstateProxyInstanceTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger">ReinstateProxyInstanceTrigger</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleStateDetails`<sup>Required</sup> <a name="LifecycleStateDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails"></a>

```csharp
public string LifecycleStateDetails { get; }
```

- *Type:* string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `ProxyComputeInstanceId`<sup>Required</sup> <a name="ProxyComputeInstanceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId"></a>

```csharp
public string ProxyComputeInstanceId { get; }
```

- *Type:* string

---

##### `ShardedDatabases`<sup>Required</sup> <a name="ShardedDatabases" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases"></a>

```csharp
public string[] ShardedDatabases { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeouts"></a>

```csharp
public GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference">GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `ReinstateProxyInstanceTriggerInput`<sup>Optional</sup> <a name="ReinstateProxyInstanceTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTriggerInput"></a>

```csharp
public double ReinstateProxyInstanceTriggerInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `ReinstateProxyInstanceTrigger`<sup>Required</sup> <a name="ReinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger"></a>

```csharp
public double ReinstateProxyInstanceTrigger { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GloballyDistributedDatabasePrivateEndpointConfig <a name="GloballyDistributedDatabasePrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabasePrivateEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string SubnetId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string[] NsgIds = null,
    double ReinstateProxyInstanceTrigger = null,
    GloballyDistributedDatabasePrivateEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.reinstateProxyInstanceTrigger">ReinstateProxyInstanceTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}.

---

##### `ReinstateProxyInstanceTrigger`<sup>Optional</sup> <a name="ReinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.reinstateProxyInstanceTrigger"></a>

```csharp
public double ReinstateProxyInstanceTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.timeouts"></a>

```csharp
public GloballyDistributedDatabasePrivateEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#timeouts GloballyDistributedDatabasePrivateEndpoint#timeouts}

---

### GloballyDistributedDatabasePrivateEndpointTimeouts <a name="GloballyDistributedDatabasePrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabasePrivateEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#create GloballyDistributedDatabasePrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#delete GloballyDistributedDatabasePrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#update GloballyDistributedDatabasePrivateEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#create GloballyDistributedDatabasePrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#delete GloballyDistributedDatabasePrivateEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#update GloballyDistributedDatabasePrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference <a name="GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



