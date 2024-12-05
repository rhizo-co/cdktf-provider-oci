# `containerInstancesContainerInstance` Submodule <a name="`containerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerInstancesContainerInstance <a name="ContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstance(Construct Scope, string Id, ContainerInstancesContainerInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig">ContainerInstancesContainerInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig">ContainerInstancesContainerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig">PutDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets">PutImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics">PutVnics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy">ResetContainerRestartPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig">ResetDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds">ResetGracefulShutdownTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets">ResetImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainers` <a name="PutContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers"></a>

```csharp
private void PutContainers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers.parameter.value"></a>

- *Type:* object

---

##### `PutDnsConfig` <a name="PutDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig"></a>

```csharp
private void PutDnsConfig(ContainerInstancesContainerInstanceDnsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `PutImagePullSecrets` <a name="PutImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets"></a>

```csharp
private void PutImagePullSecrets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets.parameter.value"></a>

- *Type:* object

---

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig"></a>

```csharp
private void PutShapeConfig(ContainerInstancesContainerInstanceShapeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerInstancesContainerInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---

##### `PutVnics` <a name="PutVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics"></a>

```csharp
private void PutVnics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics.parameter.value"></a>

- *Type:* object

---

##### `PutVolumes` <a name="PutVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes"></a>

```csharp
private void PutVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes.parameter.value"></a>

- *Type:* object

---

##### `ResetContainerRestartPolicy` <a name="ResetContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy"></a>

```csharp
private void ResetContainerRestartPolicy()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDnsConfig` <a name="ResetDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig"></a>

```csharp
private void ResetDnsConfig()
```

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain"></a>

```csharp
private void ResetFaultDomain()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetGracefulShutdownTimeoutInSeconds` <a name="ResetGracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds"></a>

```csharp
private void ResetGracefulShutdownTimeoutInSeconds()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImagePullSecrets` <a name="ResetImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets"></a>

```csharp
private void ResetImagePullSecrets()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVolumes` <a name="ResetVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerInstancesContainerInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerInstancesContainerInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerInstancesContainerInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ContainerInstancesContainerInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerInstancesContainerInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount">ContainerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers">Containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig">DnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets">ImagePullSecrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics">Vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount">VolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput">ContainerRestartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput">ContainersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput">DnsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput">FaultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput">GracefulShutdownTimeoutInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput">ImagePullSecretsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput">VnicsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput">VolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy">ContainerRestartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">GracefulShutdownTimeoutInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContainerCount`<sup>Required</sup> <a name="ContainerCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount"></a>

```csharp
public double ContainerCount { get; }
```

- *Type:* double

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers"></a>

```csharp
public ContainerInstancesContainerInstanceContainersList Containers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a>

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig"></a>

```csharp
public ContainerInstancesContainerInstanceDnsConfigOutputReference DnsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a>

---

##### `ImagePullSecrets`<sup>Required</sup> <a name="ImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```csharp
public ContainerInstancesContainerInstanceImagePullSecretsList ImagePullSecrets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig"></a>

```csharp
public ContainerInstancesContainerInstanceShapeConfigOutputReference ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts"></a>

```csharp
public ContainerInstancesContainerInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Vnics`<sup>Required</sup> <a name="Vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics"></a>

```csharp
public ContainerInstancesContainerInstanceVnicsList Vnics { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a>

---

##### `VolumeCount`<sup>Required</sup> <a name="VolumeCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount"></a>

```csharp
public double VolumeCount { get; }
```

- *Type:* double

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes"></a>

```csharp
public ContainerInstancesContainerInstanceVolumesList Volumes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ContainerRestartPolicyInput`<sup>Optional</sup> <a name="ContainerRestartPolicyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput"></a>

```csharp
public string ContainerRestartPolicyInput { get; }
```

- *Type:* string

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput"></a>

```csharp
public object ContainersInput { get; }
```

- *Type:* object

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DnsConfigInput`<sup>Optional</sup> <a name="DnsConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput"></a>

```csharp
public ContainerInstancesContainerInstanceDnsConfig DnsConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput"></a>

```csharp
public string FaultDomainInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GracefulShutdownTimeoutInSecondsInput`<sup>Optional</sup> <a name="GracefulShutdownTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput"></a>

```csharp
public string GracefulShutdownTimeoutInSecondsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImagePullSecretsInput`<sup>Optional</sup> <a name="ImagePullSecretsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput"></a>

```csharp
public object ImagePullSecretsInput { get; }
```

- *Type:* object

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput"></a>

```csharp
public ContainerInstancesContainerInstanceShapeConfig ShapeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VnicsInput`<sup>Optional</sup> <a name="VnicsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput"></a>

```csharp
public object VnicsInput { get; }
```

- *Type:* object

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput"></a>

```csharp
public object VolumesInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContainerRestartPolicy`<sup>Required</sup> <a name="ContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```csharp
public string ContainerRestartPolicy { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GracefulShutdownTimeoutInSeconds`<sup>Required</sup> <a name="GracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```csharp
public string GracefulShutdownTimeoutInSeconds { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerInstancesContainerInstanceConfig <a name="ContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string CompartmentId,
    object Containers,
    string Shape,
    ContainerInstancesContainerInstanceShapeConfig ShapeConfig,
    object Vnics,
    string ContainerRestartPolicy = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    ContainerInstancesContainerInstanceDnsConfig DnsConfig = null,
    string FaultDomain = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string GracefulShutdownTimeoutInSeconds = null,
    string Id = null,
    object ImagePullSecrets = null,
    string State = null,
    ContainerInstancesContainerInstanceTimeouts Timeouts = null,
    object Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers">Containers</a></code> | <code>object</code> | containers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics">Vnics</a></code> | <code>object</code> | vnics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy">ContainerRestartPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig">DnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | dns_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain">FaultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds">GracefulShutdownTimeoutInSeconds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets">ImagePullSecrets</a></code> | <code>object</code> | image_pull_secrets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes">Volumes</a></code> | <code>object</code> | volumes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}.

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers"></a>

```csharp
public object Containers { get; set; }
```

- *Type:* object

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}.

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig"></a>

```csharp
public ContainerInstancesContainerInstanceShapeConfig ShapeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}

---

##### `Vnics`<sup>Required</sup> <a name="Vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics"></a>

```csharp
public object Vnics { get; set; }
```

- *Type:* object

vnics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}

---

##### `ContainerRestartPolicy`<sup>Optional</sup> <a name="ContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy"></a>

```csharp
public string ContainerRestartPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `DnsConfig`<sup>Optional</sup> <a name="DnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig"></a>

```csharp
public ContainerInstancesContainerInstanceDnsConfig DnsConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain"></a>

```csharp
public string FaultDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `GracefulShutdownTimeoutInSeconds`<sup>Optional</sup> <a name="GracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds"></a>

```csharp
public string GracefulShutdownTimeoutInSeconds { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImagePullSecrets`<sup>Optional</sup> <a name="ImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets"></a>

```csharp
public object ImagePullSecrets { get; set; }
```

- *Type:* object

image_pull_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts"></a>

```csharp
public ContainerInstancesContainerInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes"></a>

```csharp
public object Volumes { get; set; }
```

- *Type:* object

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}

---

### ContainerInstancesContainerInstanceContainers <a name="ContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainers {
    string ImageUrl,
    string[] Arguments = null,
    string[] Command = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    object HealthChecks = null,
    object IsResourcePrincipalDisabled = null,
    ContainerInstancesContainerInstanceContainersResourceConfig ResourceConfig = null,
    ContainerInstancesContainerInstanceContainersSecurityContext SecurityContext = null,
    object VolumeMounts = null,
    string WorkingDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl">ImageUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments">Arguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks">HealthChecks</a></code> | <code>object</code> | health_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled">IsResourcePrincipalDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | resource_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext">SecurityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts">VolumeMounts</a></code> | <code>object</code> | volume_mounts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}. |

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl"></a>

```csharp
public string ImageUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments"></a>

```csharp
public string[] Arguments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks"></a>

```csharp
public object HealthChecks { get; set; }
```

- *Type:* object

health_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_checks ContainerInstancesContainerInstance#health_checks}

---

##### `IsResourcePrincipalDisabled`<sup>Optional</sup> <a name="IsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled"></a>

```csharp
public object IsResourcePrincipalDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}.

---

##### `ResourceConfig`<sup>Optional</sup> <a name="ResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig"></a>

```csharp
public ContainerInstancesContainerInstanceContainersResourceConfig ResourceConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#resource_config ContainerInstancesContainerInstance#resource_config}

---

##### `SecurityContext`<sup>Optional</sup> <a name="SecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContext SecurityContext { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context ContainerInstancesContainerInstance#security_context}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts"></a>

```csharp
public object VolumeMounts { get; set; }
```

- *Type:* object

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_mounts ContainerInstancesContainerInstance#volume_mounts}

---

##### `WorkingDirectory`<sup>Optional</sup> <a name="WorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}.

---

### ContainerInstancesContainerInstanceContainersHealthChecks <a name="ContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersHealthChecks {
    string HealthCheckType,
    string[] Command = null,
    string FailureAction = null,
    double FailureThreshold = null,
    object Headers = null,
    double InitialDelayInSeconds = null,
    double IntervalInSeconds = null,
    string Name = null,
    string Path = null,
    double Port = null,
    string Status = null,
    string StatusDetails = null,
    double SuccessThreshold = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction">FailureAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers">Headers</a></code> | <code>object</code> | headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds">InitialDelayInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails">StatusDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}. |

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `FailureAction`<sup>Optional</sup> <a name="FailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction"></a>

```csharp
public string FailureAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#headers ContainerInstancesContainerInstance#headers}

---

##### `InitialDelayInSeconds`<sup>Optional</sup> <a name="InitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds"></a>

```csharp
public double InitialDelayInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}.

---

##### `IntervalInSeconds`<sup>Optional</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}.

---

##### `StatusDetails`<sup>Optional</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails"></a>

```csharp
public string StatusDetails { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}.

---

##### `SuccessThreshold`<sup>Optional</sup> <a name="SuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}.

---

### ContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersHealthChecksHeaders {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}.

---

### ContainerInstancesContainerInstanceContainersResourceConfig <a name="ContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersResourceConfig {
    double MemoryLimitInGbs = null,
    double VcpusLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs">MemoryLimitInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit">VcpusLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}. |

---

##### `MemoryLimitInGbs`<sup>Optional</sup> <a name="MemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs"></a>

```csharp
public double MemoryLimitInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}.

---

##### `VcpusLimit`<sup>Optional</sup> <a name="VcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit"></a>

```csharp
public double VcpusLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}.

---

### ContainerInstancesContainerInstanceContainersSecurityContext <a name="ContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersSecurityContext {
    ContainerInstancesContainerInstanceContainersSecurityContextCapabilities Capabilities = null,
    object IsNonRootUserCheckEnabled = null,
    object IsRootFileSystemReadonly = null,
    double RunAsGroup = null,
    double RunAsUser = null,
    string SecurityContextType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities">Capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled">IsNonRootUserCheckEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly">IsRootFileSystemReadonly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup">RunAsGroup</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser">RunAsUser</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType">SecurityContextType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}. |

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilities Capabilities { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#capabilities ContainerInstancesContainerInstance#capabilities}

---

##### `IsNonRootUserCheckEnabled`<sup>Optional</sup> <a name="IsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled"></a>

```csharp
public object IsNonRootUserCheckEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}.

---

##### `IsRootFileSystemReadonly`<sup>Optional</sup> <a name="IsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly"></a>

```csharp
public object IsRootFileSystemReadonly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}.

---

##### `RunAsGroup`<sup>Optional</sup> <a name="RunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup"></a>

```csharp
public double RunAsGroup { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}.

---

##### `RunAsUser`<sup>Optional</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser"></a>

```csharp
public double RunAsUser { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}.

---

##### `SecurityContextType`<sup>Optional</sup> <a name="SecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType"></a>

```csharp
public string SecurityContextType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}.

---

### ContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersSecurityContextCapabilities {
    string[] AddCapabilities = null,
    string[] DropCapabilities = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities">AddCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities">DropCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}. |

---

##### `AddCapabilities`<sup>Optional</sup> <a name="AddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities"></a>

```csharp
public string[] AddCapabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}.

---

##### `DropCapabilities`<sup>Optional</sup> <a name="DropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities"></a>

```csharp
public string[] DropCapabilities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}.

---

### ContainerInstancesContainerInstanceContainersVolumeMounts <a name="ContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersVolumeMounts {
    string MountPath,
    string VolumeName,
    object IsReadOnly = null,
    double Partition = null,
    string SubPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName">VolumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly">IsReadOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition">Partition</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath">SubPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}.

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}.

---

##### `IsReadOnly`<sup>Optional</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly"></a>

```csharp
public object IsReadOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition"></a>

```csharp
public double Partition { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}.

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath"></a>

```csharp
public string SubPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}.

---

### ContainerInstancesContainerInstanceDnsConfig <a name="ContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceDnsConfig {
    string[] Nameservers = null,
    string[] Options = null,
    string[] Searches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers">Nameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options">Options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches">Searches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}. |

---

##### `Nameservers`<sup>Optional</sup> <a name="Nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers"></a>

```csharp
public string[] Nameservers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}.

---

##### `Searches`<sup>Optional</sup> <a name="Searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches"></a>

```csharp
public string[] Searches { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}.

---

### ContainerInstancesContainerInstanceImagePullSecrets <a name="ContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceImagePullSecrets {
    string RegistryEndpoint,
    string SecretType,
    string Password = null,
    string SecretId = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint">RegistryEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType">SecretType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}. |

---

##### `RegistryEndpoint`<sup>Required</sup> <a name="RegistryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint"></a>

```csharp
public string RegistryEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}.

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType"></a>

```csharp
public string SecretType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}.

---

### ContainerInstancesContainerInstanceShapeConfig <a name="ContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceShapeConfig {
    double Ocpus,
    double MemoryInGbs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus">Ocpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}. |

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus"></a>

```csharp
public double Ocpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}.

---

### ContainerInstancesContainerInstanceTimeouts <a name="ContainerInstancesContainerInstanceTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}.

---

### ContainerInstancesContainerInstanceVnics <a name="ContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVnics {
    string SubnetId,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string HostnameLabel = null,
    object IsPublicIpAssigned = null,
    string[] NsgIds = null,
    string PrivateIp = null,
    object SkipSourceDestCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned">IsPublicIpAssigned</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}.

---

##### `IsPublicIpAssigned`<sup>Optional</sup> <a name="IsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned"></a>

```csharp
public object IsPublicIpAssigned { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}.

---

##### `SkipSourceDestCheck`<sup>Optional</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck"></a>

```csharp
public object SkipSourceDestCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}.

---

### ContainerInstancesContainerInstanceVolumes <a name="ContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVolumes {
    string Name,
    string VolumeType,
    string BackingStore = null,
    object Configs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore">BackingStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs">Configs</a></code> | <code>object</code> | configs block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}.

---

##### `BackingStore`<sup>Optional</sup> <a name="BackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore"></a>

```csharp
public string BackingStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}.

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs"></a>

```csharp
public object Configs { get; set; }
```

- *Type:* object

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#configs ContainerInstancesContainerInstance#configs}

---

### ContainerInstancesContainerInstanceVolumesConfigs <a name="ContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVolumesConfigs {
    string Data = null,
    string FileName = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName">FileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |

---

##### `Data`<sup>Optional</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}.

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersHealthChecksHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```csharp
private ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceContainersHealthChecksList <a name="ContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersHealthChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```csharp
private ContainerInstancesContainerInstanceContainersHealthChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersHealthChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction">ResetFailureAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds">ResetInitialDelayInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds">ResetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails">ResetStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold">ResetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetCommand` <a name="ResetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetFailureAction` <a name="ResetFailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction"></a>

```csharp
private void ResetFailureAction()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetHeaders` <a name="ResetHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetInitialDelayInSeconds` <a name="ResetInitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds"></a>

```csharp
private void ResetInitialDelayInSeconds()
```

##### `ResetIntervalInSeconds` <a name="ResetIntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds"></a>

```csharp
private void ResetIntervalInSeconds()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStatusDetails` <a name="ResetStatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails"></a>

```csharp
private void ResetStatusDetails()
```

##### `ResetSuccessThreshold` <a name="ResetSuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold"></a>

```csharp
private void ResetSuccessThreshold()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">Headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput">FailureActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput">InitialDelayInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput">StatusDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput">SuccessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">FailureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">InitialDelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">StatusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```csharp
public ContainerInstancesContainerInstanceContainersHealthChecksHeadersList Headers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `FailureActionInput`<sup>Optional</sup> <a name="FailureActionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput"></a>

```csharp
public string FailureActionInput { get; }
```

- *Type:* string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput"></a>

```csharp
public string HealthCheckTypeInput { get; }
```

- *Type:* string

---

##### `InitialDelayInSecondsInput`<sup>Optional</sup> <a name="InitialDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput"></a>

```csharp
public double InitialDelayInSecondsInput { get; }
```

- *Type:* double

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput"></a>

```csharp
public double IntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `StatusDetailsInput`<sup>Optional</sup> <a name="StatusDetailsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput"></a>

```csharp
public string StatusDetailsInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SuccessThresholdInput`<sup>Optional</sup> <a name="SuccessThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput"></a>

```csharp
public double SuccessThresholdInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `FailureAction`<sup>Required</sup> <a name="FailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```csharp
public string FailureAction { get; }
```

- *Type:* string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `InitialDelayInSeconds`<sup>Required</sup> <a name="InitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```csharp
public double InitialDelayInSeconds { get; }
```

- *Type:* double

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```csharp
public string StatusDetails { get; }
```

- *Type:* string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```csharp
public double SuccessThreshold { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceContainersList <a name="ContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get"></a>

```csharp
private ContainerInstancesContainerInstanceContainersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceContainersOutputReference <a name="ContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks">PutHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig">PutResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext">PutSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled">ResetIsResourcePrincipalDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig">ResetResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext">ResetSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory">ResetWorkingDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthChecks` <a name="PutHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks"></a>

```csharp
private void PutHealthChecks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks.parameter.value"></a>

- *Type:* object

---

##### `PutResourceConfig` <a name="PutResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig"></a>

```csharp
private void PutResourceConfig(ContainerInstancesContainerInstanceContainersResourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `PutSecurityContext` <a name="PutSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext"></a>

```csharp
private void PutSecurityContext(ContainerInstancesContainerInstanceContainersSecurityContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts"></a>

```csharp
private void PutVolumeMounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* object

---

##### `ResetArguments` <a name="ResetArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetCommand` <a name="ResetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks"></a>

```csharp
private void ResetHealthChecks()
```

##### `ResetIsResourcePrincipalDisabled` <a name="ResetIsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled"></a>

```csharp
private void ResetIsResourcePrincipalDisabled()
```

##### `ResetResourceConfig` <a name="ResetResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig"></a>

```csharp
private void ResetResourceConfig()
```

##### `ResetSecurityContext` <a name="ResetSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext"></a>

```csharp
private void ResetSecurityContext()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts"></a>

```csharp
private void ResetVolumeMounts()
```

##### `ResetWorkingDirectory` <a name="ResetWorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory"></a>

```csharp
private void ResetWorkingDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">ContainerInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">ExitCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">FaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">SecurityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">TimeTerminated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput">HealthChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput">ImageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput">IsResourcePrincipalDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput">ResourceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput">SecurityContextInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput">WorkingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">ImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">IsResourcePrincipalDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `ContainerInstanceId`<sup>Required</sup> <a name="ContainerInstanceId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```csharp
public string ContainerInstanceId { get; }
```

- *Type:* string

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```csharp
public double ExitCode { get; }
```

- *Type:* double

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```csharp
public string FaultDomain { get; }
```

- *Type:* string

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```csharp
public ContainerInstancesContainerInstanceContainersHealthChecksList HealthChecks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResourceConfig`<sup>Required</sup> <a name="ResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```csharp
public ContainerInstancesContainerInstanceContainersResourceConfigOutputReference ResourceConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a>

---

##### `SecurityContext`<sup>Required</sup> <a name="SecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContextOutputReference SecurityContext { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeTerminated`<sup>Required</sup> <a name="TimeTerminated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```csharp
public string TimeTerminated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```csharp
public ContainerInstancesContainerInstanceContainersVolumeMountsList VolumeMounts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput"></a>

```csharp
public string[] ArgumentsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput"></a>

```csharp
public object HealthChecksInput { get; }
```

- *Type:* object

---

##### `ImageUrlInput`<sup>Optional</sup> <a name="ImageUrlInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput"></a>

```csharp
public string ImageUrlInput { get; }
```

- *Type:* string

---

##### `IsResourcePrincipalDisabledInput`<sup>Optional</sup> <a name="IsResourcePrincipalDisabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput"></a>

```csharp
public object IsResourcePrincipalDisabledInput { get; }
```

- *Type:* object

---

##### `ResourceConfigInput`<sup>Optional</sup> <a name="ResourceConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput"></a>

```csharp
public ContainerInstancesContainerInstanceContainersResourceConfig ResourceConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `SecurityContextInput`<sup>Optional</sup> <a name="SecurityContextInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContext SecurityContextInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput"></a>

```csharp
public object VolumeMountsInput { get; }
```

- *Type:* object

---

##### `WorkingDirectoryInput`<sup>Optional</sup> <a name="WorkingDirectoryInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput"></a>

```csharp
public string WorkingDirectoryInput { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```csharp
public string ImageUrl { get; }
```

- *Type:* string

---

##### `IsResourcePrincipalDisabled`<sup>Required</sup> <a name="IsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```csharp
public object IsResourcePrincipalDisabled { get; }
```

- *Type:* object

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="ContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersResourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs">ResetMemoryLimitInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit">ResetVcpusLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryLimitInGbs` <a name="ResetMemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs"></a>

```csharp
private void ResetMemoryLimitInGbs()
```

##### `ResetVcpusLimit` <a name="ResetVcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit"></a>

```csharp
private void ResetVcpusLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput">MemoryLimitInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput">VcpusLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">MemoryLimitInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">VcpusLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryLimitInGbsInput`<sup>Optional</sup> <a name="MemoryLimitInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput"></a>

```csharp
public double MemoryLimitInGbsInput { get; }
```

- *Type:* double

---

##### `VcpusLimitInput`<sup>Optional</sup> <a name="VcpusLimitInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput"></a>

```csharp
public double VcpusLimitInput { get; }
```

- *Type:* double

---

##### `MemoryLimitInGbs`<sup>Required</sup> <a name="MemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```csharp
public double MemoryLimitInGbs { get; }
```

- *Type:* double

---

##### `VcpusLimit`<sup>Required</sup> <a name="VcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```csharp
public double VcpusLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerInstancesContainerInstanceContainersResourceConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities">ResetAddCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities">ResetDropCapabilities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddCapabilities` <a name="ResetAddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities"></a>

```csharp
private void ResetAddCapabilities()
```

##### `ResetDropCapabilities` <a name="ResetDropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities"></a>

```csharp
private void ResetDropCapabilities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput">AddCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput">DropCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">AddCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">DropCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddCapabilitiesInput`<sup>Optional</sup> <a name="AddCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput"></a>

```csharp
public string[] AddCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `DropCapabilitiesInput`<sup>Optional</sup> <a name="DropCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput"></a>

```csharp
public string[] DropCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `AddCapabilities`<sup>Required</sup> <a name="AddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```csharp
public string[] AddCapabilities { get; }
```

- *Type:* string[]

---

##### `DropCapabilities`<sup>Required</sup> <a name="DropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```csharp
public string[] DropCapabilities { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilities InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersSecurityContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled">ResetIsNonRootUserCheckEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly">ResetIsRootFileSystemReadonly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup">ResetRunAsGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser">ResetRunAsUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType">ResetSecurityContextType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapabilities` <a name="PutCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities"></a>

```csharp
private void PutCapabilities(ContainerInstancesContainerInstanceContainersSecurityContextCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities"></a>

```csharp
private void ResetCapabilities()
```

##### `ResetIsNonRootUserCheckEnabled` <a name="ResetIsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled"></a>

```csharp
private void ResetIsNonRootUserCheckEnabled()
```

##### `ResetIsRootFileSystemReadonly` <a name="ResetIsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly"></a>

```csharp
private void ResetIsRootFileSystemReadonly()
```

##### `ResetRunAsGroup` <a name="ResetRunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```csharp
private void ResetRunAsGroup()
```

##### `ResetRunAsUser` <a name="ResetRunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser"></a>

```csharp
private void ResetRunAsUser()
```

##### `ResetSecurityContextType` <a name="ResetSecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType"></a>

```csharp
private void ResetSecurityContextType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">Capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput">CapabilitiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput">IsNonRootUserCheckEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput">IsRootFileSystemReadonlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput">RunAsGroupInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput">RunAsUserInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput">SecurityContextTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">IsNonRootUserCheckEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">IsRootFileSystemReadonly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">RunAsGroup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">RunAsUser</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">SecurityContextType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference Capabilities { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a>

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContextCapabilities CapabilitiesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `IsNonRootUserCheckEnabledInput`<sup>Optional</sup> <a name="IsNonRootUserCheckEnabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput"></a>

```csharp
public object IsNonRootUserCheckEnabledInput { get; }
```

- *Type:* object

---

##### `IsRootFileSystemReadonlyInput`<sup>Optional</sup> <a name="IsRootFileSystemReadonlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput"></a>

```csharp
public object IsRootFileSystemReadonlyInput { get; }
```

- *Type:* object

---

##### `RunAsGroupInput`<sup>Optional</sup> <a name="RunAsGroupInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```csharp
public double RunAsGroupInput { get; }
```

- *Type:* double

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```csharp
public double RunAsUserInput { get; }
```

- *Type:* double

---

##### `SecurityContextTypeInput`<sup>Optional</sup> <a name="SecurityContextTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput"></a>

```csharp
public string SecurityContextTypeInput { get; }
```

- *Type:* string

---

##### `IsNonRootUserCheckEnabled`<sup>Required</sup> <a name="IsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```csharp
public object IsNonRootUserCheckEnabled { get; }
```

- *Type:* object

---

##### `IsRootFileSystemReadonly`<sup>Required</sup> <a name="IsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```csharp
public object IsRootFileSystemReadonly { get; }
```

- *Type:* object

---

##### `RunAsGroup`<sup>Required</sup> <a name="RunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```csharp
public double RunAsGroup { get; }
```

- *Type:* double

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```csharp
public double RunAsUser { get; }
```

- *Type:* double

---

##### `SecurityContextType`<sup>Required</sup> <a name="SecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```csharp
public string SecurityContextType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```csharp
public ContainerInstancesContainerInstanceContainersSecurityContext InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### ContainerInstancesContainerInstanceContainersVolumeMountsList <a name="ContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersVolumeMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```csharp
private ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly">ResetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath">ResetSubPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsReadOnly` <a name="ResetIsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly"></a>

```csharp
private void ResetIsReadOnly()
```

##### `ResetPartition` <a name="ResetPartition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetSubPath` <a name="ResetSubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```csharp
private void ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput">IsReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">Partition</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReadOnlyInput`<sup>Optional</sup> <a name="IsReadOnlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput"></a>

```csharp
public object IsReadOnlyInput { get; }
```

- *Type:* object

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput"></a>

```csharp
public double PartitionInput { get; }
```

- *Type:* double

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```csharp
public string SubPathInput { get; }
```

- *Type:* string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```csharp
public object IsReadOnly { get; }
```

- *Type:* object

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```csharp
public double Partition { get; }
```

- *Type:* double

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```csharp
public string SubPath { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceDnsConfigOutputReference <a name="ContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceDnsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers">ResetNameservers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches">ResetSearches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameservers` <a name="ResetNameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers"></a>

```csharp
private void ResetNameservers()
```

##### `ResetOptions` <a name="ResetOptions" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetSearches` <a name="ResetSearches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches"></a>

```csharp
private void ResetSearches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput">SearchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">Nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">Searches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput"></a>

```csharp
public string[] NameserversInput { get; }
```

- *Type:* string[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `SearchesInput`<sup>Optional</sup> <a name="SearchesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput"></a>

```csharp
public string[] SearchesInput { get; }
```

- *Type:* string[]

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```csharp
public string[] Nameservers { get; }
```

- *Type:* string[]

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `Searches`<sup>Required</sup> <a name="Searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```csharp
public string[] Searches { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerInstancesContainerInstanceDnsConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---


### ContainerInstancesContainerInstanceImagePullSecretsList <a name="ContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceImagePullSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```csharp
private ContainerInstancesContainerInstanceImagePullSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="ContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceImagePullSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSecretId` <a name="ResetSecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId"></a>

```csharp
private void ResetSecretId()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput">RegistryEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput">SecretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">RegistryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">SecretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegistryEndpointInput`<sup>Optional</sup> <a name="RegistryEndpointInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput"></a>

```csharp
public string RegistryEndpointInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretTypeInput`<sup>Optional</sup> <a name="SecretTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput"></a>

```csharp
public string SecretTypeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RegistryEndpoint`<sup>Required</sup> <a name="RegistryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```csharp
public string RegistryEndpoint { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```csharp
public string SecretType { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceShapeConfigOutputReference <a name="ContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```csharp
private void ResetMemoryInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```csharp
public double NetworkingBandwidthInGbps { get; }
```

- *Type:* double

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```csharp
public string ProcessorDescription { get; }
```

- *Type:* string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```csharp
public double MemoryInGbsInput { get; }
```

- *Type:* double

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```csharp
public double OcpusInput { get; }
```

- *Type:* double

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public double MemoryInGbs { get; }
```

- *Type:* double

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```csharp
public double Ocpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```csharp
public ContainerInstancesContainerInstanceShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---


### ContainerInstancesContainerInstanceTimeoutsOutputReference <a name="ContainerInstancesContainerInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceVnicsList <a name="ContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVnicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get"></a>

```csharp
private ContainerInstancesContainerInstanceVnicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceVnicsOutputReference <a name="ContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVnicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned">ResetIsPublicIpAssigned</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck">ResetSkipSourceDestCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel"></a>

```csharp
private void ResetHostnameLabel()
```

##### `ResetIsPublicIpAssigned` <a name="ResetIsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned"></a>

```csharp
private void ResetIsPublicIpAssigned()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetSkipSourceDestCheck` <a name="ResetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck"></a>

```csharp
private void ResetSkipSourceDestCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput">IsPublicIpAssignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput">SkipSourceDestCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">IsPublicIpAssigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput"></a>

```csharp
public string HostnameLabelInput { get; }
```

- *Type:* string

---

##### `IsPublicIpAssignedInput`<sup>Optional</sup> <a name="IsPublicIpAssignedInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput"></a>

```csharp
public object IsPublicIpAssignedInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `SkipSourceDestCheckInput`<sup>Optional</sup> <a name="SkipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput"></a>

```csharp
public object SkipSourceDestCheckInput { get; }
```

- *Type:* object

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```csharp
public string HostnameLabel { get; }
```

- *Type:* string

---

##### `IsPublicIpAssigned`<sup>Required</sup> <a name="IsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```csharp
public object IsPublicIpAssigned { get; }
```

- *Type:* object

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```csharp
public object SkipSourceDestCheck { get; }
```

- *Type:* object

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceVolumesConfigsList <a name="ContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVolumesConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```csharp
private ContainerInstancesContainerInstanceVolumesConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="ContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVolumesConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetFileName` <a name="ResetFileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetPath` <a name="ResetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceVolumesList <a name="ContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get"></a>

```csharp
private ContainerInstancesContainerInstanceVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ContainerInstancesContainerInstanceVolumesOutputReference <a name="ContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ContainerInstancesContainerInstanceVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs">PutConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore">ResetBackingStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs">ResetConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigs` <a name="PutConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs"></a>

```csharp
private void PutConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetBackingStore` <a name="ResetBackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore"></a>

```csharp
private void ResetBackingStore()
```

##### `ResetConfigs` <a name="ResetConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs"></a>

```csharp
private void ResetConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs">Configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput">BackingStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput">ConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">BackingStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```csharp
public ContainerInstancesContainerInstanceVolumesConfigsList Configs { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `BackingStoreInput`<sup>Optional</sup> <a name="BackingStoreInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput"></a>

```csharp
public string BackingStoreInput { get; }
```

- *Type:* string

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput"></a>

```csharp
public object ConfigsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `BackingStore`<sup>Required</sup> <a name="BackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```csharp
public string BackingStore { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



