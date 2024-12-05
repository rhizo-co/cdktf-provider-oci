# `serviceMeshIngressGateway` Submodule <a name="`serviceMeshIngressGateway` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshIngressGateway <a name="ServiceMeshIngressGateway" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGateway(Construct Scope, string Id, ServiceMeshIngressGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig">ServiceMeshIngressGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig">ServiceMeshIngressGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging">PutAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls">PutMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging">ResetAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls">ResetMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLogging` <a name="PutAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging"></a>

```csharp
private void PutAccessLogging(ServiceMeshIngressGatewayAccessLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---

##### `PutHosts` <a name="PutHosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts"></a>

```csharp
private void PutHosts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts.parameter.value"></a>

- *Type:* object

---

##### `PutMtls` <a name="PutMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls"></a>

```csharp
private void PutMtls(ServiceMeshIngressGatewayMtls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceMeshIngressGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

---

##### `ResetAccessLogging` <a name="ResetAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging"></a>

```csharp
private void ResetAccessLogging()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMtls` <a name="ResetMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls"></a>

```csharp
private void ResetMtls()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshIngressGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshIngressGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshIngressGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

ServiceMeshIngressGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceMeshIngressGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceMeshIngressGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshIngressGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging">AccessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput">AccessLoggingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput">HostsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput">MeshIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput">MtlsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId">MeshId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessLogging`<sup>Required</sup> <a name="AccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging"></a>

```csharp
public ServiceMeshIngressGatewayAccessLoggingOutputReference AccessLogging { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts"></a>

```csharp
public ServiceMeshIngressGatewayHostsList Hosts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls"></a>

```csharp
public ServiceMeshIngressGatewayMtlsOutputReference Mtls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts"></a>

```csharp
public ServiceMeshIngressGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AccessLoggingInput`<sup>Optional</sup> <a name="AccessLoggingInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput"></a>

```csharp
public ServiceMeshIngressGatewayAccessLogging AccessLoggingInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput"></a>

```csharp
public object HostsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshIdInput`<sup>Optional</sup> <a name="MeshIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput"></a>

```csharp
public string MeshIdInput { get; }
```

- *Type:* string

---

##### `MtlsInput`<sup>Optional</sup> <a name="MtlsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput"></a>

```csharp
public ServiceMeshIngressGatewayMtls MtlsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId"></a>

```csharp
public string MeshId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshIngressGatewayAccessLogging <a name="ServiceMeshIngressGatewayAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayAccessLogging {
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}.

---

### ServiceMeshIngressGatewayConfig <a name="ServiceMeshIngressGatewayConfig" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Hosts,
    string MeshId,
    string Name,
    ServiceMeshIngressGatewayAccessLogging AccessLogging = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    ServiceMeshIngressGatewayMtls Mtls = null,
    ServiceMeshIngressGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts">Hosts</a></code> | <code>object</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId">MeshId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging">AccessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}.

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts"></a>

```csharp
public object Hosts { get; set; }
```

- *Type:* object

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hosts ServiceMeshIngressGateway#hosts}

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId"></a>

```csharp
public string MeshId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `AccessLogging`<sup>Optional</sup> <a name="AccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging"></a>

```csharp
public ServiceMeshIngressGatewayAccessLogging AccessLogging { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#access_logging ServiceMeshIngressGateway#access_logging}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mtls`<sup>Optional</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls"></a>

```csharp
public ServiceMeshIngressGatewayMtls Mtls { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mtls ServiceMeshIngressGateway#mtls}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts"></a>

```csharp
public ServiceMeshIngressGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#timeouts ServiceMeshIngressGateway#timeouts}

---

### ServiceMeshIngressGatewayHosts <a name="ServiceMeshIngressGatewayHosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHosts {
    object Listeners,
    string Name,
    string[] Hostnames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners">Listeners</a></code> | <code>object</code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames">Hostnames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}. |

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners"></a>

```csharp
public object Listeners { get; set; }
```

- *Type:* object

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#listeners ServiceMeshIngressGateway#listeners}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `Hostnames`<sup>Optional</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames"></a>

```csharp
public string[] Hostnames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}.

---

### ServiceMeshIngressGatewayHostsListeners <a name="ServiceMeshIngressGatewayHostsListeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListeners {
    double Port,
    string Protocol,
    ServiceMeshIngressGatewayHostsListenersTls Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | tls block. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}.

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTls Tls { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#tls ServiceMeshIngressGateway#tls}

---

### ServiceMeshIngressGatewayHostsListenersTls <a name="ServiceMeshIngressGatewayHostsListenersTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTls {
    string Mode,
    ServiceMeshIngressGatewayHostsListenersTlsClientValidation ClientValidation = null,
    ServiceMeshIngressGatewayHostsListenersTlsServerCertificate ServerCertificate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation">ClientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | client_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | server_certificate block. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}.

---

##### `ClientValidation`<sup>Optional</sup> <a name="ClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidation ClientValidation { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

client_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#client_validation ServiceMeshIngressGateway#client_validation}

---

##### `ServerCertificate`<sup>Optional</sup> <a name="ServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificate ServerCertificate { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#server_certificate ServiceMeshIngressGateway#server_certificate}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidation <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTlsClientValidation {
    string[] SubjectAlternateNames = null,
    ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle TrustedCaBundle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames">SubjectAlternateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle">TrustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | trusted_ca_bundle block. |

---

##### `SubjectAlternateNames`<sup>Optional</sup> <a name="SubjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames"></a>

```csharp
public string[] SubjectAlternateNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}.

---

##### `TrustedCaBundle`<sup>Optional</sup> <a name="TrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle TrustedCaBundle { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

trusted_ca_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#trusted_ca_bundle ServiceMeshIngressGateway#trusted_ca_bundle}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle {
    string Type,
    string CaBundleId = null,
    string SecretName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId">CaBundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `CaBundleId`<sup>Optional</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId"></a>

```csharp
public string CaBundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}.

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayHostsListenersTlsServerCertificate <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTlsServerCertificate {
    string Type,
    string CertificateId = null,
    string SecretName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId">CertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName">SecretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}.

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayMtls <a name="ServiceMeshIngressGatewayMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayMtls {
    double MaximumValidity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity">MaximumValidity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}. |

---

##### `MaximumValidity`<sup>Optional</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity"></a>

```csharp
public double MaximumValidity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}.

---

### ServiceMeshIngressGatewayTimeouts <a name="ServiceMeshIngressGatewayTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshIngressGatewayAccessLoggingOutputReference <a name="ServiceMeshIngressGatewayAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayAccessLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue"></a>

```csharp
public ServiceMeshIngressGatewayAccessLogging InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---


### ServiceMeshIngressGatewayHostsList <a name="ServiceMeshIngressGatewayHostsList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get"></a>

```csharp
private ServiceMeshIngressGatewayHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshIngressGatewayHostsListenersList <a name="ServiceMeshIngressGatewayHostsListenersList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get"></a>

```csharp
private ServiceMeshIngressGatewayHostsListenersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshIngressGatewayHostsListenersOutputReference <a name="ServiceMeshIngressGatewayHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTls` <a name="PutTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls"></a>

```csharp
private void PutTls(ServiceMeshIngressGatewayHostsListenersTls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---

##### `ResetTls` <a name="ResetTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput">TlsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsOutputReference Tls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTls TlsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle">PutTrustedCaBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames">ResetSubjectAlternateNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle">ResetTrustedCaBundle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustedCaBundle` <a name="PutTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle"></a>

```csharp
private void PutTrustedCaBundle(ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---

##### `ResetSubjectAlternateNames` <a name="ResetSubjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames"></a>

```csharp
private void ResetSubjectAlternateNames()
```

##### `ResetTrustedCaBundle` <a name="ResetTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle"></a>

```csharp
private void ResetTrustedCaBundle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">TrustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput">SubjectAlternateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput">TrustedCaBundleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">SubjectAlternateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustedCaBundle`<sup>Required</sup> <a name="TrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference TrustedCaBundle { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a>

---

##### `SubjectAlternateNamesInput`<sup>Optional</sup> <a name="SubjectAlternateNamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput"></a>

```csharp
public string[] SubjectAlternateNamesInput { get; }
```

- *Type:* string[]

---

##### `TrustedCaBundleInput`<sup>Optional</sup> <a name="TrustedCaBundleInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle TrustedCaBundleInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---

##### `SubjectAlternateNames`<sup>Required</sup> <a name="SubjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```csharp
public string[] SubjectAlternateNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId">ResetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaBundleId` <a name="ResetCaBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId"></a>

```csharp
private void ResetCaBundleId()
```

##### `ResetSecretName` <a name="ResetSecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput">CaBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">CaBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaBundleIdInput`<sup>Optional</sup> <a name="CaBundleIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput"></a>

```csharp
public string CaBundleIdInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```csharp
public string CaBundleId { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation">PutClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate">PutServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation">ResetClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate">ResetServerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientValidation` <a name="PutClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation"></a>

```csharp
private void PutClientValidation(ServiceMeshIngressGatewayHostsListenersTlsClientValidation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---

##### `PutServerCertificate` <a name="PutServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate"></a>

```csharp
private void PutServerCertificate(ServiceMeshIngressGatewayHostsListenersTlsServerCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---

##### `ResetClientValidation` <a name="ResetClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation"></a>

```csharp
private void ResetClientValidation()
```

##### `ResetServerCertificate` <a name="ResetServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate"></a>

```csharp
private void ResetServerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation">ClientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput">ClientValidationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput">ServerCertificateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientValidation`<sup>Required</sup> <a name="ClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference ClientValidation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a>

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference ServerCertificate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a>

---

##### `ClientValidationInput`<sup>Optional</sup> <a name="ClientValidationInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsClientValidation ClientValidationInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ServerCertificateInput`<sup>Optional</sup> <a name="ServerCertificateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificate ServerCertificateInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetSecretName` <a name="ResetSecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---


### ServiceMeshIngressGatewayHostsOutputReference <a name="ServiceMeshIngressGatewayHostsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners">PutListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames">ResetHostnames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutListeners` <a name="PutListeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners"></a>

```csharp
private void PutListeners(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners.parameter.value"></a>

- *Type:* object

---

##### `ResetHostnames` <a name="ResetHostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames"></a>

```csharp
private void ResetHostnames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners">Listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput">HostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput">ListenersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners"></a>

```csharp
public ServiceMeshIngressGatewayHostsListenersList Listeners { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a>

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput"></a>

```csharp
public string[] HostnamesInput { get; }
```

- *Type:* string[]

---

##### `ListenersInput`<sup>Optional</sup> <a name="ListenersInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput"></a>

```csharp
public object ListenersInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceMeshIngressGatewayMtlsOutputReference <a name="ServiceMeshIngressGatewayMtlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayMtlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity">ResetMaximumValidity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumValidity` <a name="ResetMaximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity"></a>

```csharp
private void ResetMaximumValidity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput">MaximumValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity">MaximumValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `MaximumValidityInput`<sup>Optional</sup> <a name="MaximumValidityInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput"></a>

```csharp
public double MaximumValidityInput { get; }
```

- *Type:* double

---

##### `MaximumValidity`<sup>Required</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity"></a>

```csharp
public double MaximumValidity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue"></a>

```csharp
public ServiceMeshIngressGatewayMtls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---


### ServiceMeshIngressGatewayTimeoutsOutputReference <a name="ServiceMeshIngressGatewayTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new ServiceMeshIngressGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



