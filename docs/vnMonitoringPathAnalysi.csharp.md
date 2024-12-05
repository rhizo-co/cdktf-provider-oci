# `vnMonitoringPathAnalysi` Submodule <a name="`vnMonitoringPathAnalysi` Submodule" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VnMonitoringPathAnalysi <a name="VnMonitoringPathAnalysi" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi oci_vn_monitoring_path_analysi}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysi(Construct Scope, string Id, VnMonitoringPathAnalysiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig">VnMonitoringPathAnalysiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig">VnMonitoringPathAnalysiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint">PutDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters">PutProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions">PutQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint">PutSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint">ResetDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId">ResetPathAnalyzerTestId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters">ResetProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions">ResetQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint">ResetSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationEndpoint` <a name="PutDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint"></a>

```csharp
private void PutDestinationEndpoint(VnMonitoringPathAnalysiDestinationEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putDestinationEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---

##### `PutProtocolParameters` <a name="PutProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters"></a>

```csharp
private void PutProtocolParameters(VnMonitoringPathAnalysiProtocolParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putProtocolParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---

##### `PutQueryOptions` <a name="PutQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions"></a>

```csharp
private void PutQueryOptions(VnMonitoringPathAnalysiQueryOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putQueryOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---

##### `PutSourceEndpoint` <a name="PutSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint"></a>

```csharp
private void PutSourceEndpoint(VnMonitoringPathAnalysiSourceEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putSourceEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts"></a>

```csharp
private void PutTimeouts(VnMonitoringPathAnalysiTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDestinationEndpoint` <a name="ResetDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetDestinationEndpoint"></a>

```csharp
private void ResetDestinationEndpoint()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPathAnalyzerTestId` <a name="ResetPathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetPathAnalyzerTestId"></a>

```csharp
private void ResetPathAnalyzerTestId()
```

##### `ResetProtocol` <a name="ResetProtocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolParameters` <a name="ResetProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetProtocolParameters"></a>

```csharp
private void ResetProtocolParameters()
```

##### `ResetQueryOptions` <a name="ResetQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetQueryOptions"></a>

```csharp
private void ResetQueryOptions()
```

##### `ResetSourceEndpoint` <a name="ResetSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetSourceEndpoint"></a>

```csharp
private void ResetSourceEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalysi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalysi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalysi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalysi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VnMonitoringPathAnalysi resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VnMonitoringPathAnalysi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VnMonitoringPathAnalysi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VnMonitoringPathAnalysi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput">DestinationEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput">PathAnalyzerTestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput">ProtocolParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput">QueryOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput">SourceEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId">PathAnalyzerTestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpoint"></a>

```csharp
public VnMonitoringPathAnalysiDestinationEndpointOutputReference DestinationEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference">VnMonitoringPathAnalysiDestinationEndpointOutputReference</a>

---

##### `ProtocolParameters`<sup>Required</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParameters"></a>

```csharp
public VnMonitoringPathAnalysiProtocolParametersOutputReference ProtocolParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference">VnMonitoringPathAnalysiProtocolParametersOutputReference</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptions"></a>

```csharp
public VnMonitoringPathAnalysiQueryOptionsOutputReference QueryOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference">VnMonitoringPathAnalysiQueryOptionsOutputReference</a>

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpoint"></a>

```csharp
public VnMonitoringPathAnalysiSourceEndpointOutputReference SourceEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference">VnMonitoringPathAnalysiSourceEndpointOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeouts"></a>

```csharp
public VnMonitoringPathAnalysiTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference">VnMonitoringPathAnalysiTimeoutsOutputReference</a>

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DestinationEndpointInput`<sup>Optional</sup> <a name="DestinationEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.destinationEndpointInput"></a>

```csharp
public VnMonitoringPathAnalysiDestinationEndpoint DestinationEndpointInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PathAnalyzerTestIdInput`<sup>Optional</sup> <a name="PathAnalyzerTestIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestIdInput"></a>

```csharp
public string PathAnalyzerTestIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `ProtocolParametersInput`<sup>Optional</sup> <a name="ProtocolParametersInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocolParametersInput"></a>

```csharp
public VnMonitoringPathAnalysiProtocolParameters ProtocolParametersInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---

##### `QueryOptionsInput`<sup>Optional</sup> <a name="QueryOptionsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.queryOptionsInput"></a>

```csharp
public VnMonitoringPathAnalysiQueryOptions QueryOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---

##### `SourceEndpointInput`<sup>Optional</sup> <a name="SourceEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.sourceEndpointInput"></a>

```csharp
public VnMonitoringPathAnalysiSourceEndpoint SourceEndpointInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PathAnalyzerTestId`<sup>Required</sup> <a name="PathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.pathAnalyzerTestId"></a>

```csharp
public string PathAnalyzerTestId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VnMonitoringPathAnalysiConfig <a name="VnMonitoringPathAnalysiConfig" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Type,
    string CacheControl = null,
    string CompartmentId = null,
    VnMonitoringPathAnalysiDestinationEndpoint DestinationEndpoint = null,
    string Id = null,
    string PathAnalyzerTestId = null,
    double Protocol = null,
    VnMonitoringPathAnalysiProtocolParameters ProtocolParameters = null,
    VnMonitoringPathAnalysiQueryOptions QueryOptions = null,
    VnMonitoringPathAnalysiSourceEndpoint SourceEndpoint = null,
    VnMonitoringPathAnalysiTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId">PathAnalyzerTestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol">Protocol</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#cache_control VnMonitoringPathAnalysi#cache_control}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#compartment_id VnMonitoringPathAnalysi#compartment_id}.

---

##### `DestinationEndpoint`<sup>Optional</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.destinationEndpoint"></a>

```csharp
public VnMonitoringPathAnalysiDestinationEndpoint DestinationEndpoint { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_endpoint VnMonitoringPathAnalysi#destination_endpoint}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#id VnMonitoringPathAnalysi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PathAnalyzerTestId`<sup>Optional</sup> <a name="PathAnalyzerTestId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.pathAnalyzerTestId"></a>

```csharp
public string PathAnalyzerTestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#path_analyzer_test_id VnMonitoringPathAnalysi#path_analyzer_test_id}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol VnMonitoringPathAnalysi#protocol}.

---

##### `ProtocolParameters`<sup>Optional</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.protocolParameters"></a>

```csharp
public VnMonitoringPathAnalysiProtocolParameters ProtocolParameters { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#protocol_parameters VnMonitoringPathAnalysi#protocol_parameters}

---

##### `QueryOptions`<sup>Optional</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.queryOptions"></a>

```csharp
public VnMonitoringPathAnalysiQueryOptions QueryOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#query_options VnMonitoringPathAnalysi#query_options}

---

##### `SourceEndpoint`<sup>Optional</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.sourceEndpoint"></a>

```csharp
public VnMonitoringPathAnalysiSourceEndpoint SourceEndpoint { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_endpoint VnMonitoringPathAnalysi#source_endpoint}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiConfig.property.timeouts"></a>

```csharp
public VnMonitoringPathAnalysiTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts">VnMonitoringPathAnalysiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#timeouts VnMonitoringPathAnalysi#timeouts}

---

### VnMonitoringPathAnalysiDestinationEndpoint <a name="VnMonitoringPathAnalysiDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiDestinationEndpoint {
    string Type,
    string Address = null,
    string InstanceId = null,
    string ListenerId = null,
    string LoadBalancerId = null,
    string NetworkLoadBalancerId = null,
    string SubnetId = null,
    string VlanId = null,
    string VnicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId">ListenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId">VnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.listenerId"></a>

```csharp
public string ListenerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint.property.vnicId"></a>

```csharp
public string VnicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiProtocolParameters <a name="VnMonitoringPathAnalysiProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiProtocolParameters {
    string Type,
    double DestinationPort = null,
    double IcmpCode = null,
    double IcmpType = null,
    double SourcePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort">DestinationPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort">SourcePort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.destinationPort"></a>

```csharp
public double DestinationPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#destination_port VnMonitoringPathAnalysi#destination_port}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_code VnMonitoringPathAnalysi#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#icmp_type VnMonitoringPathAnalysi#icmp_type}.

---

##### `SourcePort`<sup>Optional</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters.property.sourcePort"></a>

```csharp
public double SourcePort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#source_port VnMonitoringPathAnalysi#source_port}.

---

### VnMonitoringPathAnalysiQueryOptions <a name="VnMonitoringPathAnalysiQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiQueryOptions {
    object IsBiDirectionalAnalysis = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}. |

---

##### `IsBiDirectionalAnalysis`<sup>Optional</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions.property.isBiDirectionalAnalysis"></a>

```csharp
public object IsBiDirectionalAnalysis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#is_bi_directional_analysis VnMonitoringPathAnalysi#is_bi_directional_analysis}.

---

### VnMonitoringPathAnalysiSourceEndpoint <a name="VnMonitoringPathAnalysiSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiSourceEndpoint {
    string Type,
    string Address = null,
    string InstanceId = null,
    string ListenerId = null,
    string LoadBalancerId = null,
    string NetworkLoadBalancerId = null,
    string SubnetId = null,
    string VlanId = null,
    string VnicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId">ListenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId">VnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#type VnMonitoringPathAnalysi#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#address VnMonitoringPathAnalysi#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#instance_id VnMonitoringPathAnalysi#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.listenerId"></a>

```csharp
public string ListenerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#listener_id VnMonitoringPathAnalysi#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#load_balancer_id VnMonitoringPathAnalysi#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#network_load_balancer_id VnMonitoringPathAnalysi#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#subnet_id VnMonitoringPathAnalysi#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vlan_id VnMonitoringPathAnalysi#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint.property.vnicId"></a>

```csharp
public string VnicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#vnic_id VnMonitoringPathAnalysi#vnic_id}.

---

### VnMonitoringPathAnalysiTimeouts <a name="VnMonitoringPathAnalysiTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#create VnMonitoringPathAnalysi#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#delete VnMonitoringPathAnalysi#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analysi#update VnMonitoringPathAnalysi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VnMonitoringPathAnalysiDestinationEndpointOutputReference <a name="VnMonitoringPathAnalysiDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiDestinationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetListenerId"></a>

```csharp
private void ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetLoadBalancerId"></a>

```csharp
private void ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```csharp
private void ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.resetVnicId"></a>

```csharp
private void ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerIdInput"></a>

```csharp
public string ListenerIdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```csharp
public string NetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicIdInput"></a>

```csharp
public string VnicIdInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpointOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalysiDestinationEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiDestinationEndpoint">VnMonitoringPathAnalysiDestinationEndpoint</a>

---


### VnMonitoringPathAnalysiProtocolParametersOutputReference <a name="VnMonitoringPathAnalysiProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiProtocolParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort">ResetSourcePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetDestinationPort"></a>

```csharp
private void ResetDestinationPort()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetSourcePort` <a name="ResetSourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.resetSourcePort"></a>

```csharp
private void ResetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput">SourcePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort">SourcePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPortInput"></a>

```csharp
public double DestinationPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `SourcePortInput`<sup>Optional</sup> <a name="SourcePortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePortInput"></a>

```csharp
public double SourcePortInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.sourcePort"></a>

```csharp
public double SourcePort { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParametersOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalysiProtocolParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiProtocolParameters">VnMonitoringPathAnalysiProtocolParameters</a>

---


### VnMonitoringPathAnalysiQueryOptionsOutputReference <a name="VnMonitoringPathAnalysiQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiQueryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis">ResetIsBiDirectionalAnalysis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsBiDirectionalAnalysis` <a name="ResetIsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.resetIsBiDirectionalAnalysis"></a>

```csharp
private void ResetIsBiDirectionalAnalysis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput">IsBiDirectionalAnalysisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsBiDirectionalAnalysisInput`<sup>Optional</sup> <a name="IsBiDirectionalAnalysisInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput"></a>

```csharp
public object IsBiDirectionalAnalysisInput { get; }
```

- *Type:* object

---

##### `IsBiDirectionalAnalysis`<sup>Required</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```csharp
public object IsBiDirectionalAnalysis { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptionsOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalysiQueryOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiQueryOptions">VnMonitoringPathAnalysiQueryOptions</a>

---


### VnMonitoringPathAnalysiSourceEndpointOutputReference <a name="VnMonitoringPathAnalysiSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiSourceEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetListenerId"></a>

```csharp
private void ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetLoadBalancerId"></a>

```csharp
private void ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```csharp
private void ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.resetVnicId"></a>

```csharp
private void ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerIdInput"></a>

```csharp
public string ListenerIdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```csharp
public string NetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicIdInput"></a>

```csharp
public string VnicIdInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpointOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalysiSourceEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiSourceEndpoint">VnMonitoringPathAnalysiSourceEndpoint</a>

---


### VnMonitoringPathAnalysiTimeoutsOutputReference <a name="VnMonitoringPathAnalysiTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalysiTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalysi.VnMonitoringPathAnalysiTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



