# `containerengineCluster` Submodule <a name="`containerengineCluster` Submodule" id="rhizo-co-terraform-provider-oci.containerengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineCluster <a name="ContainerengineCluster" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster oci_containerengine_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineCluster(Construct Scope, string Id, ContainerengineClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig">ContainerengineClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig">ContainerengineClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions">PutClusterPodNetworkOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig">PutEndpointConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig">PutImagePolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetClusterPodNetworkOptions">ResetClusterPodNetworkOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetEndpointConfig">ResetEndpointConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetImagePolicyConfig">ResetImagePolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusterPodNetworkOptions` <a name="PutClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions"></a>

```csharp
private void PutClusterPodNetworkOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions.parameter.value"></a>

- *Type:* object

---

##### `PutEndpointConfig` <a name="PutEndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig"></a>

```csharp
private void PutEndpointConfig(ContainerengineClusterEndpointConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---

##### `PutImagePolicyConfig` <a name="PutImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig"></a>

```csharp
private void PutImagePolicyConfig(ContainerengineClusterImagePolicyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---

##### `PutOptions` <a name="PutOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions"></a>

```csharp
private void PutOptions(ContainerengineClusterOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerengineClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

---

##### `ResetClusterPodNetworkOptions` <a name="ResetClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetClusterPodNetworkOptions"></a>

```csharp
private void ResetClusterPodNetworkOptions()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetEndpointConfig` <a name="ResetEndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetEndpointConfig"></a>

```csharp
private void ResetEndpointConfig()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImagePolicyConfig` <a name="ResetImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetImagePolicyConfig"></a>

```csharp
private void ResetImagePolicyConfig()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetOptions` <a name="ResetOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerengineCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerengineCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerengineCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerengineCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerengineCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerengineCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.availableKubernetesUpgrades">AvailableKubernetesUpgrades</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptions">ClusterPodNetworkOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList">ContainerengineClusterClusterPodNetworkOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfig">EndpointConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference">ContainerengineClusterEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList">ContainerengineClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfig">ImagePolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference">ContainerengineClusterImagePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList">ContainerengineClusterMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.openIdConnectDiscoveryEndpoint">OpenIdConnectDiscoveryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.options">Options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference">ContainerengineClusterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference">ContainerengineClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptionsInput">ClusterPodNetworkOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfigInput">EndpointConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfigInput">ImagePolicyConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersionInput">KubernetesVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.optionsInput">OptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnIdInput">VcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvailableKubernetesUpgrades`<sup>Required</sup> <a name="AvailableKubernetesUpgrades" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.availableKubernetesUpgrades"></a>

```csharp
public string[] AvailableKubernetesUpgrades { get; }
```

- *Type:* string[]

---

##### `ClusterPodNetworkOptions`<sup>Required</sup> <a name="ClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptions"></a>

```csharp
public ContainerengineClusterClusterPodNetworkOptionsList ClusterPodNetworkOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList">ContainerengineClusterClusterPodNetworkOptionsList</a>

---

##### `EndpointConfig`<sup>Required</sup> <a name="EndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfig"></a>

```csharp
public ContainerengineClusterEndpointConfigOutputReference EndpointConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference">ContainerengineClusterEndpointConfigOutputReference</a>

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpoints"></a>

```csharp
public ContainerengineClusterEndpointsList Endpoints { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList">ContainerengineClusterEndpointsList</a>

---

##### `ImagePolicyConfig`<sup>Required</sup> <a name="ImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfig"></a>

```csharp
public ContainerengineClusterImagePolicyConfigOutputReference ImagePolicyConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference">ContainerengineClusterImagePolicyConfigOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.metadata"></a>

```csharp
public ContainerengineClusterMetadataList Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList">ContainerengineClusterMetadataList</a>

---

##### `OpenIdConnectDiscoveryEndpoint`<sup>Required</sup> <a name="OpenIdConnectDiscoveryEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.openIdConnectDiscoveryEndpoint"></a>

```csharp
public string OpenIdConnectDiscoveryEndpoint { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.options"></a>

```csharp
public ContainerengineClusterOptionsOutputReference Options { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference">ContainerengineClusterOptionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeouts"></a>

```csharp
public ContainerengineClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference">ContainerengineClusterTimeoutsOutputReference</a>

---

##### `ClusterPodNetworkOptionsInput`<sup>Optional</sup> <a name="ClusterPodNetworkOptionsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptionsInput"></a>

```csharp
public object ClusterPodNetworkOptionsInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EndpointConfigInput`<sup>Optional</sup> <a name="EndpointConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfigInput"></a>

```csharp
public ContainerengineClusterEndpointConfig EndpointConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImagePolicyConfigInput`<sup>Optional</sup> <a name="ImagePolicyConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfigInput"></a>

```csharp
public ContainerengineClusterImagePolicyConfig ImagePolicyConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KubernetesVersionInput`<sup>Optional</sup> <a name="KubernetesVersionInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersionInput"></a>

```csharp
public string KubernetesVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.optionsInput"></a>

```csharp
public ContainerengineClusterOptions OptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnIdInput"></a>

```csharp
public string VcnIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineClusterClusterPodNetworkOptions <a name="ContainerengineClusterClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterClusterPodNetworkOptions {
    string CniType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.property.cniType">CniType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cni_type ContainerengineCluster#cni_type}. |

---

##### `CniType`<sup>Required</sup> <a name="CniType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.property.cniType"></a>

```csharp
public string CniType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cni_type ContainerengineCluster#cni_type}.

---

### ContainerengineClusterConfig <a name="ContainerengineClusterConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string KubernetesVersion,
    string Name,
    string VcnId,
    object ClusterPodNetworkOptions = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    ContainerengineClusterEndpointConfig EndpointConfig = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    ContainerengineClusterImagePolicyConfig ImagePolicyConfig = null,
    string KmsKeyId = null,
    ContainerengineClusterOptions Options = null,
    ContainerengineClusterTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.vcnId">VcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.clusterPodNetworkOptions">ClusterPodNetworkOptions</a></code> | <code>object</code> | cluster_pod_network_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.endpointConfig">EndpointConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | endpoint_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.imagePolicyConfig">ImagePolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | image_policy_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.options">Options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}.

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}.

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.vcnId"></a>

```csharp
public string VcnId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}.

---

##### `ClusterPodNetworkOptions`<sup>Optional</sup> <a name="ClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.clusterPodNetworkOptions"></a>

```csharp
public object ClusterPodNetworkOptions { get; set; }
```

- *Type:* object

cluster_pod_network_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cluster_pod_network_options ContainerengineCluster#cluster_pod_network_options}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `EndpointConfig`<sup>Optional</sup> <a name="EndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.endpointConfig"></a>

```csharp
public ContainerengineClusterEndpointConfig EndpointConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#endpoint_config ContainerengineCluster#endpoint_config}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImagePolicyConfig`<sup>Optional</sup> <a name="ImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.imagePolicyConfig"></a>

```csharp
public ContainerengineClusterImagePolicyConfig ImagePolicyConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

image_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#image_policy_config ContainerengineCluster#image_policy_config}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.options"></a>

```csharp
public ContainerengineClusterOptions Options { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#options ContainerengineCluster#options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.timeouts"></a>

```csharp
public ContainerengineClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#timeouts ContainerengineCluster#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}.

---

### ContainerengineClusterEndpointConfig <a name="ContainerengineClusterEndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterEndpointConfig {
    string SubnetId,
    object IsPublicIpEnabled = null,
    string[] NsgIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.isPublicIpEnabled">IsPublicIpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}.

---

##### `IsPublicIpEnabled`<sup>Optional</sup> <a name="IsPublicIpEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.isPublicIpEnabled"></a>

```csharp
public object IsPublicIpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}.

---

### ContainerengineClusterEndpoints <a name="ContainerengineClusterEndpoints" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterEndpoints {

};
```


### ContainerengineClusterImagePolicyConfig <a name="ContainerengineClusterImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterImagePolicyConfig {
    object IsPolicyEnabled = null,
    object KeyDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.isPolicyEnabled">IsPolicyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.keyDetails">KeyDetails</a></code> | <code>object</code> | key_details block. |

---

##### `IsPolicyEnabled`<sup>Optional</sup> <a name="IsPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.isPolicyEnabled"></a>

```csharp
public object IsPolicyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}.

---

##### `KeyDetails`<sup>Optional</sup> <a name="KeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.keyDetails"></a>

```csharp
public object KeyDetails { get; set; }
```

- *Type:* object

key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key_details ContainerengineCluster#key_details}

---

### ContainerengineClusterImagePolicyConfigKeyDetails <a name="ContainerengineClusterImagePolicyConfigKeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterImagePolicyConfigKeyDetails {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}.

---

### ContainerengineClusterMetadata <a name="ContainerengineClusterMetadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterMetadata {

};
```


### ContainerengineClusterOptions <a name="ContainerengineClusterOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptions {
    ContainerengineClusterOptionsAddOns AddOns = null,
    ContainerengineClusterOptionsAdmissionControllerOptions AdmissionControllerOptions = null,
    ContainerengineClusterOptionsKubernetesNetworkConfig KubernetesNetworkConfig = null,
    ContainerengineClusterOptionsOpenIdConnectDiscovery OpenIdConnectDiscovery = null,
    ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig OpenIdConnectTokenAuthenticationConfig = null,
    ContainerengineClusterOptionsPersistentVolumeConfig PersistentVolumeConfig = null,
    ContainerengineClusterOptionsServiceLbConfig ServiceLbConfig = null,
    string[] ServiceLbSubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.addOns">AddOns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | add_ons block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.admissionControllerOptions">AdmissionControllerOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | admission_controller_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.kubernetesNetworkConfig">KubernetesNetworkConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | kubernetes_network_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectDiscovery">OpenIdConnectDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | open_id_connect_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectTokenAuthenticationConfig">OpenIdConnectTokenAuthenticationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | open_id_connect_token_authentication_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.persistentVolumeConfig">PersistentVolumeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | persistent_volume_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbConfig">ServiceLbConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | service_lb_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbSubnetIds">ServiceLbSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}. |

---

##### `AddOns`<sup>Optional</sup> <a name="AddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.addOns"></a>

```csharp
public ContainerengineClusterOptionsAddOns AddOns { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

add_ons block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#add_ons ContainerengineCluster#add_ons}

---

##### `AdmissionControllerOptions`<sup>Optional</sup> <a name="AdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.admissionControllerOptions"></a>

```csharp
public ContainerengineClusterOptionsAdmissionControllerOptions AdmissionControllerOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

admission_controller_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#admission_controller_options ContainerengineCluster#admission_controller_options}

---

##### `KubernetesNetworkConfig`<sup>Optional</sup> <a name="KubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.kubernetesNetworkConfig"></a>

```csharp
public ContainerengineClusterOptionsKubernetesNetworkConfig KubernetesNetworkConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

kubernetes_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_network_config ContainerengineCluster#kubernetes_network_config}

---

##### `OpenIdConnectDiscovery`<sup>Optional</sup> <a name="OpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectDiscovery"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectDiscovery OpenIdConnectDiscovery { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

open_id_connect_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_discovery ContainerengineCluster#open_id_connect_discovery}

---

##### `OpenIdConnectTokenAuthenticationConfig`<sup>Optional</sup> <a name="OpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectTokenAuthenticationConfig"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig OpenIdConnectTokenAuthenticationConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

open_id_connect_token_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_token_authentication_config ContainerengineCluster#open_id_connect_token_authentication_config}

---

##### `PersistentVolumeConfig`<sup>Optional</sup> <a name="PersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.persistentVolumeConfig"></a>

```csharp
public ContainerengineClusterOptionsPersistentVolumeConfig PersistentVolumeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

persistent_volume_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#persistent_volume_config ContainerengineCluster#persistent_volume_config}

---

##### `ServiceLbConfig`<sup>Optional</sup> <a name="ServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbConfig"></a>

```csharp
public ContainerengineClusterOptionsServiceLbConfig ServiceLbConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

service_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_config ContainerengineCluster#service_lb_config}

---

##### `ServiceLbSubnetIds`<sup>Optional</sup> <a name="ServiceLbSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbSubnetIds"></a>

```csharp
public string[] ServiceLbSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}.

---

### ContainerengineClusterOptionsAddOns <a name="ContainerengineClusterOptionsAddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsAddOns {
    object IsKubernetesDashboardEnabled = null,
    object IsTillerEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isKubernetesDashboardEnabled">IsKubernetesDashboardEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isTillerEnabled">IsTillerEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}. |

---

##### `IsKubernetesDashboardEnabled`<sup>Optional</sup> <a name="IsKubernetesDashboardEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isKubernetesDashboardEnabled"></a>

```csharp
public object IsKubernetesDashboardEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}.

---

##### `IsTillerEnabled`<sup>Optional</sup> <a name="IsTillerEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isTillerEnabled"></a>

```csharp
public object IsTillerEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}.

---

### ContainerengineClusterOptionsAdmissionControllerOptions <a name="ContainerengineClusterOptionsAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsAdmissionControllerOptions {
    object IsPodSecurityPolicyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.property.isPodSecurityPolicyEnabled">IsPodSecurityPolicyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}. |

---

##### `IsPodSecurityPolicyEnabled`<sup>Optional</sup> <a name="IsPodSecurityPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.property.isPodSecurityPolicyEnabled"></a>

```csharp
public object IsPodSecurityPolicyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}.

---

### ContainerengineClusterOptionsKubernetesNetworkConfig <a name="ContainerengineClusterOptionsKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsKubernetesNetworkConfig {
    string PodsCidr = null,
    string ServicesCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.podsCidr">PodsCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.servicesCidr">ServicesCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}. |

---

##### `PodsCidr`<sup>Optional</sup> <a name="PodsCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.podsCidr"></a>

```csharp
public string PodsCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}.

---

##### `ServicesCidr`<sup>Optional</sup> <a name="ServicesCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.servicesCidr"></a>

```csharp
public string ServicesCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}.

---

### ContainerengineClusterOptionsOpenIdConnectDiscovery <a name="ContainerengineClusterOptionsOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOpenIdConnectDiscovery {
    object IsOpenIdConnectDiscoveryEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.property.isOpenIdConnectDiscoveryEnabled">IsOpenIdConnectDiscoveryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}. |

---

##### `IsOpenIdConnectDiscoveryEnabled`<sup>Optional</sup> <a name="IsOpenIdConnectDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.property.isOpenIdConnectDiscoveryEnabled"></a>

```csharp
public object IsOpenIdConnectDiscoveryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}.

---

### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig {
    object IsOpenIdConnectAuthEnabled,
    string CaCertificate = null,
    string ClientId = null,
    string GroupsClaim = null,
    string GroupsPrefix = null,
    string IssuerUrl = null,
    object RequiredClaims = null,
    string[] SigningAlgorithms = null,
    string UsernameClaim = null,
    string UsernamePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.isOpenIdConnectAuthEnabled">IsOpenIdConnectAuthEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.caCertificate">CaCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsPrefix">GroupsPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.requiredClaims">RequiredClaims</a></code> | <code>object</code> | required_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.signingAlgorithms">SigningAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernameClaim">UsernameClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernamePrefix">UsernamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}. |

---

##### `IsOpenIdConnectAuthEnabled`<sup>Required</sup> <a name="IsOpenIdConnectAuthEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.isOpenIdConnectAuthEnabled"></a>

```csharp
public object IsOpenIdConnectAuthEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}.

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.caCertificate"></a>

```csharp
public string CaCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}.

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}.

---

##### `GroupsPrefix`<sup>Optional</sup> <a name="GroupsPrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsPrefix"></a>

```csharp
public string GroupsPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}.

---

##### `IssuerUrl`<sup>Optional</sup> <a name="IssuerUrl" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}.

---

##### `RequiredClaims`<sup>Optional</sup> <a name="RequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.requiredClaims"></a>

```csharp
public object RequiredClaims { get; set; }
```

- *Type:* object

required_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#required_claims ContainerengineCluster#required_claims}

---

##### `SigningAlgorithms`<sup>Optional</sup> <a name="SigningAlgorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.signingAlgorithms"></a>

```csharp
public string[] SigningAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}.

---

##### `UsernameClaim`<sup>Optional</sup> <a name="UsernameClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernameClaim"></a>

```csharp
public string UsernameClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}.

---

##### `UsernamePrefix`<sup>Optional</sup> <a name="UsernamePrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernamePrefix"></a>

```csharp
public string UsernamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}.

---

### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key ContainerengineCluster#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#value ContainerengineCluster#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key ContainerengineCluster#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#value ContainerengineCluster#value}.

---

### ContainerengineClusterOptionsPersistentVolumeConfig <a name="ContainerengineClusterOptionsPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsPersistentVolumeConfig {
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

### ContainerengineClusterOptionsServiceLbConfig <a name="ContainerengineClusterOptionsServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsServiceLbConfig {
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

### ContainerengineClusterTimeouts <a name="ContainerengineClusterTimeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineClusterClusterPodNetworkOptionsList <a name="ContainerengineClusterClusterPodNetworkOptionsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterClusterPodNetworkOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get"></a>

```csharp
private ContainerengineClusterClusterPodNetworkOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerengineClusterClusterPodNetworkOptionsOutputReference <a name="ContainerengineClusterClusterPodNetworkOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterClusterPodNetworkOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniTypeInput">CniTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType">CniType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CniTypeInput`<sup>Optional</sup> <a name="CniTypeInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniTypeInput"></a>

```csharp
public string CniTypeInput { get; }
```

- *Type:* string

---

##### `CniType`<sup>Required</sup> <a name="CniType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType"></a>

```csharp
public string CniType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerengineClusterEndpointConfigOutputReference <a name="ContainerengineClusterEndpointConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetIsPublicIpEnabled">ResetIsPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsPublicIpEnabled` <a name="ResetIsPublicIpEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetIsPublicIpEnabled"></a>

```csharp
private void ResetIsPublicIpEnabled()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabledInput">IsPublicIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled">IsPublicIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsPublicIpEnabledInput`<sup>Optional</sup> <a name="IsPublicIpEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabledInput"></a>

```csharp
public object IsPublicIpEnabledInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `IsPublicIpEnabled`<sup>Required</sup> <a name="IsPublicIpEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled"></a>

```csharp
public object IsPublicIpEnabled { get; }
```

- *Type:* object

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterEndpointConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---


### ContainerengineClusterEndpointsList <a name="ContainerengineClusterEndpointsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get"></a>

```csharp
private ContainerengineClusterEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ContainerengineClusterEndpointsOutputReference <a name="ContainerengineClusterEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.kubernetes">Kubernetes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.publicEndpoint">PublicEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint">VcnHostnameEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints">ContainerengineClusterEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.kubernetes"></a>

```csharp
public string Kubernetes { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.publicEndpoint"></a>

```csharp
public string PublicEndpoint { get; }
```

- *Type:* string

---

##### `VcnHostnameEndpoint`<sup>Required</sup> <a name="VcnHostnameEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint"></a>

```csharp
public string VcnHostnameEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterEndpoints InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints">ContainerengineClusterEndpoints</a>

---


### ContainerengineClusterImagePolicyConfigKeyDetailsList <a name="ContainerengineClusterImagePolicyConfigKeyDetailsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterImagePolicyConfigKeyDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get"></a>

```csharp
private ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference <a name="ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerengineClusterImagePolicyConfigOutputReference <a name="ContainerengineClusterImagePolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterImagePolicyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails">PutKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetIsPolicyEnabled">ResetIsPolicyEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetKeyDetails">ResetKeyDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyDetails` <a name="PutKeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails"></a>

```csharp
private void PutKeyDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails.parameter.value"></a>

- *Type:* object

---

##### `ResetIsPolicyEnabled` <a name="ResetIsPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetIsPolicyEnabled"></a>

```csharp
private void ResetIsPolicyEnabled()
```

##### `ResetKeyDetails` <a name="ResetKeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetKeyDetails"></a>

```csharp
private void ResetKeyDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails">KeyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList">ContainerengineClusterImagePolicyConfigKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabledInput">IsPolicyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetailsInput">KeyDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled">IsPolicyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyDetails`<sup>Required</sup> <a name="KeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails"></a>

```csharp
public ContainerengineClusterImagePolicyConfigKeyDetailsList KeyDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList">ContainerengineClusterImagePolicyConfigKeyDetailsList</a>

---

##### `IsPolicyEnabledInput`<sup>Optional</sup> <a name="IsPolicyEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabledInput"></a>

```csharp
public object IsPolicyEnabledInput { get; }
```

- *Type:* object

---

##### `KeyDetailsInput`<sup>Optional</sup> <a name="KeyDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetailsInput"></a>

```csharp
public object KeyDetailsInput { get; }
```

- *Type:* object

---

##### `IsPolicyEnabled`<sup>Required</sup> <a name="IsPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled"></a>

```csharp
public object IsPolicyEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterImagePolicyConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---


### ContainerengineClusterMetadataList <a name="ContainerengineClusterMetadataList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get"></a>

```csharp
private ContainerengineClusterMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ContainerengineClusterMetadataOutputReference <a name="ContainerengineClusterMetadataOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByUserId">CreatedByUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId">CreatedByWorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByUserId">DeletedByUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId">DeletedByWorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration">TimeCredentialExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeDeleted">TimeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByUserId">UpdatedByUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId">UpdatedByWorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata">ContainerengineClusterMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedByUserId`<sup>Required</sup> <a name="CreatedByUserId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByUserId"></a>

```csharp
public string CreatedByUserId { get; }
```

- *Type:* string

---

##### `CreatedByWorkRequestId`<sup>Required</sup> <a name="CreatedByWorkRequestId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId"></a>

```csharp
public string CreatedByWorkRequestId { get; }
```

- *Type:* string

---

##### `DeletedByUserId`<sup>Required</sup> <a name="DeletedByUserId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByUserId"></a>

```csharp
public string DeletedByUserId { get; }
```

- *Type:* string

---

##### `DeletedByWorkRequestId`<sup>Required</sup> <a name="DeletedByWorkRequestId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId"></a>

```csharp
public string DeletedByWorkRequestId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeCredentialExpiration`<sup>Required</sup> <a name="TimeCredentialExpiration" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration"></a>

```csharp
public string TimeCredentialExpiration { get; }
```

- *Type:* string

---

##### `TimeDeleted`<sup>Required</sup> <a name="TimeDeleted" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeDeleted"></a>

```csharp
public string TimeDeleted { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpdatedByUserId`<sup>Required</sup> <a name="UpdatedByUserId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByUserId"></a>

```csharp
public string UpdatedByUserId { get; }
```

- *Type:* string

---

##### `UpdatedByWorkRequestId`<sup>Required</sup> <a name="UpdatedByWorkRequestId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId"></a>

```csharp
public string UpdatedByWorkRequestId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata">ContainerengineClusterMetadata</a>

---


### ContainerengineClusterOptionsAddOnsOutputReference <a name="ContainerengineClusterOptionsAddOnsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsAddOnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsKubernetesDashboardEnabled">ResetIsKubernetesDashboardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsTillerEnabled">ResetIsTillerEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsKubernetesDashboardEnabled` <a name="ResetIsKubernetesDashboardEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsKubernetesDashboardEnabled"></a>

```csharp
private void ResetIsKubernetesDashboardEnabled()
```

##### `ResetIsTillerEnabled` <a name="ResetIsTillerEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsTillerEnabled"></a>

```csharp
private void ResetIsTillerEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabledInput">IsKubernetesDashboardEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabledInput">IsTillerEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled">IsKubernetesDashboardEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled">IsTillerEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsKubernetesDashboardEnabledInput`<sup>Optional</sup> <a name="IsKubernetesDashboardEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabledInput"></a>

```csharp
public object IsKubernetesDashboardEnabledInput { get; }
```

- *Type:* object

---

##### `IsTillerEnabledInput`<sup>Optional</sup> <a name="IsTillerEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabledInput"></a>

```csharp
public object IsTillerEnabledInput { get; }
```

- *Type:* object

---

##### `IsKubernetesDashboardEnabled`<sup>Required</sup> <a name="IsKubernetesDashboardEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled"></a>

```csharp
public object IsKubernetesDashboardEnabled { get; }
```

- *Type:* object

---

##### `IsTillerEnabled`<sup>Required</sup> <a name="IsTillerEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled"></a>

```csharp
public object IsTillerEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptionsAddOns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---


### ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference <a name="ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resetIsPodSecurityPolicyEnabled">ResetIsPodSecurityPolicyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsPodSecurityPolicyEnabled` <a name="ResetIsPodSecurityPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resetIsPodSecurityPolicyEnabled"></a>

```csharp
private void ResetIsPodSecurityPolicyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabledInput">IsPodSecurityPolicyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled">IsPodSecurityPolicyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsPodSecurityPolicyEnabledInput`<sup>Optional</sup> <a name="IsPodSecurityPolicyEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabledInput"></a>

```csharp
public object IsPodSecurityPolicyEnabledInput { get; }
```

- *Type:* object

---

##### `IsPodSecurityPolicyEnabled`<sup>Required</sup> <a name="IsPodSecurityPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled"></a>

```csharp
public object IsPodSecurityPolicyEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptionsAdmissionControllerOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---


### ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference <a name="ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetPodsCidr">ResetPodsCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetServicesCidr">ResetServicesCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPodsCidr` <a name="ResetPodsCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetPodsCidr"></a>

```csharp
private void ResetPodsCidr()
```

##### `ResetServicesCidr` <a name="ResetServicesCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetServicesCidr"></a>

```csharp
private void ResetServicesCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidrInput">PodsCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidrInput">ServicesCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr">PodsCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr">ServicesCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PodsCidrInput`<sup>Optional</sup> <a name="PodsCidrInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidrInput"></a>

```csharp
public string PodsCidrInput { get; }
```

- *Type:* string

---

##### `ServicesCidrInput`<sup>Optional</sup> <a name="ServicesCidrInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidrInput"></a>

```csharp
public string ServicesCidrInput { get; }
```

- *Type:* string

---

##### `PodsCidr`<sup>Required</sup> <a name="PodsCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr"></a>

```csharp
public string PodsCidr { get; }
```

- *Type:* string

---

##### `ServicesCidr`<sup>Required</sup> <a name="ServicesCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr"></a>

```csharp
public string ServicesCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptionsKubernetesNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---


### ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resetIsOpenIdConnectDiscoveryEnabled">ResetIsOpenIdConnectDiscoveryEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsOpenIdConnectDiscoveryEnabled` <a name="ResetIsOpenIdConnectDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resetIsOpenIdConnectDiscoveryEnabled"></a>

```csharp
private void ResetIsOpenIdConnectDiscoveryEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabledInput">IsOpenIdConnectDiscoveryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled">IsOpenIdConnectDiscoveryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsOpenIdConnectDiscoveryEnabledInput`<sup>Optional</sup> <a name="IsOpenIdConnectDiscoveryEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabledInput"></a>

```csharp
public object IsOpenIdConnectDiscoveryEnabledInput { get; }
```

- *Type:* object

---

##### `IsOpenIdConnectDiscoveryEnabled`<sup>Required</sup> <a name="IsOpenIdConnectDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled"></a>

```csharp
public object IsOpenIdConnectDiscoveryEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectDiscovery InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims">PutRequiredClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsPrefix">ResetGroupsPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetIssuerUrl">ResetIssuerUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetRequiredClaims">ResetRequiredClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetSigningAlgorithms">ResetSigningAlgorithms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernameClaim">ResetUsernameClaim</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernamePrefix">ResetUsernamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiredClaims` <a name="PutRequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims"></a>

```csharp
private void PutRequiredClaims(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims.parameter.value"></a>

- *Type:* object

---

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetCaCertificate"></a>

```csharp
private void ResetCaCertificate()
```

##### `ResetClientId` <a name="ResetClientId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsClaim"></a>

```csharp
private void ResetGroupsClaim()
```

##### `ResetGroupsPrefix` <a name="ResetGroupsPrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsPrefix"></a>

```csharp
private void ResetGroupsPrefix()
```

##### `ResetIssuerUrl` <a name="ResetIssuerUrl" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetIssuerUrl"></a>

```csharp
private void ResetIssuerUrl()
```

##### `ResetRequiredClaims` <a name="ResetRequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetRequiredClaims"></a>

```csharp
private void ResetRequiredClaims()
```

##### `ResetSigningAlgorithms` <a name="ResetSigningAlgorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetSigningAlgorithms"></a>

```csharp
private void ResetSigningAlgorithms()
```

##### `ResetUsernameClaim` <a name="ResetUsernameClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernameClaim"></a>

```csharp
private void ResetUsernameClaim()
```

##### `ResetUsernamePrefix` <a name="ResetUsernamePrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernamePrefix"></a>

```csharp
private void ResetUsernamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims">RequiredClaims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificateInput">CaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaimInput">GroupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefixInput">GroupsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabledInput">IsOpenIdConnectAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaimsInput">RequiredClaimsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithmsInput">SigningAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaimInput">UsernameClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefixInput">UsernamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix">GroupsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled">IsOpenIdConnectAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms">SigningAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim">UsernameClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix">UsernamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequiredClaims`<sup>Required</sup> <a name="RequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList RequiredClaims { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a>

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificateInput"></a>

```csharp
public string CaCertificateInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaimInput"></a>

```csharp
public string GroupsClaimInput { get; }
```

- *Type:* string

---

##### `GroupsPrefixInput`<sup>Optional</sup> <a name="GroupsPrefixInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefixInput"></a>

```csharp
public string GroupsPrefixInput { get; }
```

- *Type:* string

---

##### `IsOpenIdConnectAuthEnabledInput`<sup>Optional</sup> <a name="IsOpenIdConnectAuthEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabledInput"></a>

```csharp
public object IsOpenIdConnectAuthEnabledInput { get; }
```

- *Type:* object

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `RequiredClaimsInput`<sup>Optional</sup> <a name="RequiredClaimsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaimsInput"></a>

```csharp
public object RequiredClaimsInput { get; }
```

- *Type:* object

---

##### `SigningAlgorithmsInput`<sup>Optional</sup> <a name="SigningAlgorithmsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithmsInput"></a>

```csharp
public string[] SigningAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `UsernameClaimInput`<sup>Optional</sup> <a name="UsernameClaimInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaimInput"></a>

```csharp
public string UsernameClaimInput { get; }
```

- *Type:* string

---

##### `UsernamePrefixInput`<sup>Optional</sup> <a name="UsernamePrefixInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefixInput"></a>

```csharp
public string UsernamePrefixInput { get; }
```

- *Type:* string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; }
```

- *Type:* string

---

##### `GroupsPrefix`<sup>Required</sup> <a name="GroupsPrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix"></a>

```csharp
public string GroupsPrefix { get; }
```

- *Type:* string

---

##### `IsOpenIdConnectAuthEnabled`<sup>Required</sup> <a name="IsOpenIdConnectAuthEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled"></a>

```csharp
public object IsOpenIdConnectAuthEnabled { get; }
```

- *Type:* object

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `SigningAlgorithms`<sup>Required</sup> <a name="SigningAlgorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms"></a>

```csharp
public string[] SigningAlgorithms { get; }
```

- *Type:* string[]

---

##### `UsernameClaim`<sup>Required</sup> <a name="UsernameClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim"></a>

```csharp
public string UsernameClaim { get; }
```

- *Type:* string

---

##### `UsernamePrefix`<sup>Required</sup> <a name="UsernamePrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix"></a>

```csharp
public string UsernamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get"></a>

```csharp
private ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerengineClusterOptionsOutputReference <a name="ContainerengineClusterOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns">PutAddOns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions">PutAdmissionControllerOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig">PutKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery">PutOpenIdConnectDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig">PutOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig">PutPersistentVolumeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig">PutServiceLbConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAddOns">ResetAddOns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAdmissionControllerOptions">ResetAdmissionControllerOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetKubernetesNetworkConfig">ResetKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectDiscovery">ResetOpenIdConnectDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectTokenAuthenticationConfig">ResetOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetPersistentVolumeConfig">ResetPersistentVolumeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbConfig">ResetServiceLbConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbSubnetIds">ResetServiceLbSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddOns` <a name="PutAddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns"></a>

```csharp
private void PutAddOns(ContainerengineClusterOptionsAddOns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---

##### `PutAdmissionControllerOptions` <a name="PutAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions"></a>

```csharp
private void PutAdmissionControllerOptions(ContainerengineClusterOptionsAdmissionControllerOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---

##### `PutKubernetesNetworkConfig` <a name="PutKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig"></a>

```csharp
private void PutKubernetesNetworkConfig(ContainerengineClusterOptionsKubernetesNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---

##### `PutOpenIdConnectDiscovery` <a name="PutOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery"></a>

```csharp
private void PutOpenIdConnectDiscovery(ContainerengineClusterOptionsOpenIdConnectDiscovery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---

##### `PutOpenIdConnectTokenAuthenticationConfig` <a name="PutOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig"></a>

```csharp
private void PutOpenIdConnectTokenAuthenticationConfig(ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---

##### `PutPersistentVolumeConfig` <a name="PutPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig"></a>

```csharp
private void PutPersistentVolumeConfig(ContainerengineClusterOptionsPersistentVolumeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---

##### `PutServiceLbConfig` <a name="PutServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig"></a>

```csharp
private void PutServiceLbConfig(ContainerengineClusterOptionsServiceLbConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---

##### `ResetAddOns` <a name="ResetAddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAddOns"></a>

```csharp
private void ResetAddOns()
```

##### `ResetAdmissionControllerOptions` <a name="ResetAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAdmissionControllerOptions"></a>

```csharp
private void ResetAdmissionControllerOptions()
```

##### `ResetKubernetesNetworkConfig` <a name="ResetKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetKubernetesNetworkConfig"></a>

```csharp
private void ResetKubernetesNetworkConfig()
```

##### `ResetOpenIdConnectDiscovery` <a name="ResetOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectDiscovery"></a>

```csharp
private void ResetOpenIdConnectDiscovery()
```

##### `ResetOpenIdConnectTokenAuthenticationConfig` <a name="ResetOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectTokenAuthenticationConfig"></a>

```csharp
private void ResetOpenIdConnectTokenAuthenticationConfig()
```

##### `ResetPersistentVolumeConfig` <a name="ResetPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetPersistentVolumeConfig"></a>

```csharp
private void ResetPersistentVolumeConfig()
```

##### `ResetServiceLbConfig` <a name="ResetServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbConfig"></a>

```csharp
private void ResetServiceLbConfig()
```

##### `ResetServiceLbSubnetIds` <a name="ResetServiceLbSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbSubnetIds"></a>

```csharp
private void ResetServiceLbSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOns">AddOns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference">ContainerengineClusterOptionsAddOnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptions">AdmissionControllerOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference">ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig">KubernetesNetworkConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference">ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery">OpenIdConnectDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference">ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig">OpenIdConnectTokenAuthenticationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig">PersistentVolumeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference">ContainerengineClusterOptionsPersistentVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfig">ServiceLbConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference">ContainerengineClusterOptionsServiceLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOnsInput">AddOnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptionsInput">AdmissionControllerOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfigInput">KubernetesNetworkConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscoveryInput">OpenIdConnectDiscoveryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfigInput">OpenIdConnectTokenAuthenticationConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfigInput">PersistentVolumeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfigInput">ServiceLbConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIdsInput">ServiceLbSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds">ServiceLbSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddOns`<sup>Required</sup> <a name="AddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOns"></a>

```csharp
public ContainerengineClusterOptionsAddOnsOutputReference AddOns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference">ContainerengineClusterOptionsAddOnsOutputReference</a>

---

##### `AdmissionControllerOptions`<sup>Required</sup> <a name="AdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptions"></a>

```csharp
public ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference AdmissionControllerOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference">ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference</a>

---

##### `KubernetesNetworkConfig`<sup>Required</sup> <a name="KubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig"></a>

```csharp
public ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference KubernetesNetworkConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference">ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference</a>

---

##### `OpenIdConnectDiscovery`<sup>Required</sup> <a name="OpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference OpenIdConnectDiscovery { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference">ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference</a>

---

##### `OpenIdConnectTokenAuthenticationConfig`<sup>Required</sup> <a name="OpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference OpenIdConnectTokenAuthenticationConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference</a>

---

##### `PersistentVolumeConfig`<sup>Required</sup> <a name="PersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig"></a>

```csharp
public ContainerengineClusterOptionsPersistentVolumeConfigOutputReference PersistentVolumeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference">ContainerengineClusterOptionsPersistentVolumeConfigOutputReference</a>

---

##### `ServiceLbConfig`<sup>Required</sup> <a name="ServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfig"></a>

```csharp
public ContainerengineClusterOptionsServiceLbConfigOutputReference ServiceLbConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference">ContainerengineClusterOptionsServiceLbConfigOutputReference</a>

---

##### `AddOnsInput`<sup>Optional</sup> <a name="AddOnsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOnsInput"></a>

```csharp
public ContainerengineClusterOptionsAddOns AddOnsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---

##### `AdmissionControllerOptionsInput`<sup>Optional</sup> <a name="AdmissionControllerOptionsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptionsInput"></a>

```csharp
public ContainerengineClusterOptionsAdmissionControllerOptions AdmissionControllerOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---

##### `KubernetesNetworkConfigInput`<sup>Optional</sup> <a name="KubernetesNetworkConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfigInput"></a>

```csharp
public ContainerengineClusterOptionsKubernetesNetworkConfig KubernetesNetworkConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---

##### `OpenIdConnectDiscoveryInput`<sup>Optional</sup> <a name="OpenIdConnectDiscoveryInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscoveryInput"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectDiscovery OpenIdConnectDiscoveryInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---

##### `OpenIdConnectTokenAuthenticationConfigInput`<sup>Optional</sup> <a name="OpenIdConnectTokenAuthenticationConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfigInput"></a>

```csharp
public ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig OpenIdConnectTokenAuthenticationConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---

##### `PersistentVolumeConfigInput`<sup>Optional</sup> <a name="PersistentVolumeConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfigInput"></a>

```csharp
public ContainerengineClusterOptionsPersistentVolumeConfig PersistentVolumeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---

##### `ServiceLbConfigInput`<sup>Optional</sup> <a name="ServiceLbConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfigInput"></a>

```csharp
public ContainerengineClusterOptionsServiceLbConfig ServiceLbConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---

##### `ServiceLbSubnetIdsInput`<sup>Optional</sup> <a name="ServiceLbSubnetIdsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIdsInput"></a>

```csharp
public string[] ServiceLbSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `ServiceLbSubnetIds`<sup>Required</sup> <a name="ServiceLbSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds"></a>

```csharp
public string[] ServiceLbSubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---


### ContainerengineClusterOptionsPersistentVolumeConfigOutputReference <a name="ContainerengineClusterOptionsPersistentVolumeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsPersistentVolumeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptionsPersistentVolumeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---


### ContainerengineClusterOptionsServiceLbConfigOutputReference <a name="ContainerengineClusterOptionsServiceLbConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterOptionsServiceLbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerengineClusterOptionsServiceLbConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---


### ContainerengineClusterTimeoutsOutputReference <a name="ContainerengineClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerengineClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



