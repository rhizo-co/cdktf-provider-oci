# `odaOdaPrivateEndpointScanProxy` Submodule <a name="`odaOdaPrivateEndpointScanProxy` Submodule" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdaOdaPrivateEndpointScanProxy <a name="OdaOdaPrivateEndpointScanProxy" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy oci_oda_oda_private_endpoint_scan_proxy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OdaOdaPrivateEndpointScanProxy(Construct Scope, string Id, OdaOdaPrivateEndpointScanProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig">OdaOdaPrivateEndpointScanProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig">OdaOdaPrivateEndpointScanProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos">PutScanListenerInfos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScanListenerInfos` <a name="PutScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos"></a>

```csharp
private void PutScanListenerInfos(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putScanListenerInfos.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts"></a>

```csharp
private void PutTimeouts(OdaOdaPrivateEndpointScanProxyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OdaOdaPrivateEndpointScanProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OdaOdaPrivateEndpointScanProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OdaOdaPrivateEndpointScanProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OdaOdaPrivateEndpointScanProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OdaOdaPrivateEndpointScanProxy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdaOdaPrivateEndpointScanProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdaOdaPrivateEndpointScanProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OdaOdaPrivateEndpointScanProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfos">ScanListenerInfos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList">OdaOdaPrivateEndpointScanProxyScanListenerInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference">OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput">OdaPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfosInput">ScanListenerInfosInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerTypeInput">ScanListenerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId">OdaPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerType">ScanListenerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ScanListenerInfos`<sup>Required</sup> <a name="ScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfos"></a>

```csharp
public OdaOdaPrivateEndpointScanProxyScanListenerInfosList ScanListenerInfos { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList">OdaOdaPrivateEndpointScanProxyScanListenerInfosList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeouts"></a>

```csharp
public OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference">OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OdaPrivateEndpointIdInput`<sup>Optional</sup> <a name="OdaPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointIdInput"></a>

```csharp
public string OdaPrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ScanListenerInfosInput`<sup>Optional</sup> <a name="ScanListenerInfosInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerInfosInput"></a>

```csharp
public object ScanListenerInfosInput { get; }
```

- *Type:* object

---

##### `ScanListenerTypeInput`<sup>Optional</sup> <a name="ScanListenerTypeInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerTypeInput"></a>

```csharp
public string ScanListenerTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OdaPrivateEndpointId`<sup>Required</sup> <a name="OdaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.odaPrivateEndpointId"></a>

```csharp
public string OdaPrivateEndpointId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ScanListenerType`<sup>Required</sup> <a name="ScanListenerType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.scanListenerType"></a>

```csharp
public string ScanListenerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdaOdaPrivateEndpointScanProxyConfig <a name="OdaOdaPrivateEndpointScanProxyConfig" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OdaOdaPrivateEndpointScanProxyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OdaPrivateEndpointId,
    string Protocol,
    object ScanListenerInfos,
    string ScanListenerType,
    string Id = null,
    OdaOdaPrivateEndpointScanProxyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId">OdaPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerInfos">ScanListenerInfos</a></code> | <code>object</code> | scan_listener_infos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerType">ScanListenerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OdaPrivateEndpointId`<sup>Required</sup> <a name="OdaPrivateEndpointId" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.odaPrivateEndpointId"></a>

```csharp
public string OdaPrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#oda_private_endpoint_id OdaOdaPrivateEndpointScanProxy#oda_private_endpoint_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#protocol OdaOdaPrivateEndpointScanProxy#protocol}.

---

##### `ScanListenerInfos`<sup>Required</sup> <a name="ScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerInfos"></a>

```csharp
public object ScanListenerInfos { get; set; }
```

- *Type:* object

scan_listener_infos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_infos OdaOdaPrivateEndpointScanProxy#scan_listener_infos}

---

##### `ScanListenerType`<sup>Required</sup> <a name="ScanListenerType" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.scanListenerType"></a>

```csharp
public string ScanListenerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_type OdaOdaPrivateEndpointScanProxy#scan_listener_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#id OdaOdaPrivateEndpointScanProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyConfig.property.timeouts"></a>

```csharp
public OdaOdaPrivateEndpointScanProxyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts">OdaOdaPrivateEndpointScanProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#timeouts OdaOdaPrivateEndpointScanProxy#timeouts}

---

### OdaOdaPrivateEndpointScanProxyScanListenerInfos <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfos" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OdaOdaPrivateEndpointScanProxyScanListenerInfos {
    string ScanListenerFqdn = null,
    string ScanListenerIp = null,
    double ScanListenerPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerFqdn">ScanListenerFqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_fqdn OdaOdaPrivateEndpointScanProxy#scan_listener_fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerIp">ScanListenerIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_ip OdaOdaPrivateEndpointScanProxy#scan_listener_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerPort">ScanListenerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_port OdaOdaPrivateEndpointScanProxy#scan_listener_port}. |

---

##### `ScanListenerFqdn`<sup>Optional</sup> <a name="ScanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerFqdn"></a>

```csharp
public string ScanListenerFqdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_fqdn OdaOdaPrivateEndpointScanProxy#scan_listener_fqdn}.

---

##### `ScanListenerIp`<sup>Optional</sup> <a name="ScanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerIp"></a>

```csharp
public string ScanListenerIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_ip OdaOdaPrivateEndpointScanProxy#scan_listener_ip}.

---

##### `ScanListenerPort`<sup>Optional</sup> <a name="ScanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfos.property.scanListenerPort"></a>

```csharp
public double ScanListenerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#scan_listener_port OdaOdaPrivateEndpointScanProxy#scan_listener_port}.

---

### OdaOdaPrivateEndpointScanProxyTimeouts <a name="OdaOdaPrivateEndpointScanProxyTimeouts" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OdaOdaPrivateEndpointScanProxyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#create OdaOdaPrivateEndpointScanProxy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#delete OdaOdaPrivateEndpointScanProxy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#update OdaOdaPrivateEndpointScanProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#create OdaOdaPrivateEndpointScanProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#delete OdaOdaPrivateEndpointScanProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oda_oda_private_endpoint_scan_proxy#update OdaOdaPrivateEndpointScanProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OdaOdaPrivateEndpointScanProxyScanListenerInfosList <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfosList" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OdaOdaPrivateEndpointScanProxyScanListenerInfosList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get"></a>

```csharp
private OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference <a name="OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerFqdn">ResetScanListenerFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerIp">ResetScanListenerIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerPort">ResetScanListenerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScanListenerFqdn` <a name="ResetScanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerFqdn"></a>

```csharp
private void ResetScanListenerFqdn()
```

##### `ResetScanListenerIp` <a name="ResetScanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerIp"></a>

```csharp
private void ResetScanListenerIp()
```

##### `ResetScanListenerPort` <a name="ResetScanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.resetScanListenerPort"></a>

```csharp
private void ResetScanListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdnInput">ScanListenerFqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIpInput">ScanListenerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPortInput">ScanListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn">ScanListenerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp">ScanListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort">ScanListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScanListenerFqdnInput`<sup>Optional</sup> <a name="ScanListenerFqdnInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdnInput"></a>

```csharp
public string ScanListenerFqdnInput { get; }
```

- *Type:* string

---

##### `ScanListenerIpInput`<sup>Optional</sup> <a name="ScanListenerIpInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIpInput"></a>

```csharp
public string ScanListenerIpInput { get; }
```

- *Type:* string

---

##### `ScanListenerPortInput`<sup>Optional</sup> <a name="ScanListenerPortInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPortInput"></a>

```csharp
public double ScanListenerPortInput { get; }
```

- *Type:* double

---

##### `ScanListenerFqdn`<sup>Required</sup> <a name="ScanListenerFqdn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerFqdn"></a>

```csharp
public string ScanListenerFqdn { get; }
```

- *Type:* string

---

##### `ScanListenerIp`<sup>Required</sup> <a name="ScanListenerIp" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerIp"></a>

```csharp
public string ScanListenerIp { get; }
```

- *Type:* string

---

##### `ScanListenerPort`<sup>Required</sup> <a name="ScanListenerPort" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.scanListenerPort"></a>

```csharp
public double ScanListenerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyScanListenerInfosOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference <a name="OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.odaOdaPrivateEndpointScanProxy.OdaOdaPrivateEndpointScanProxyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



