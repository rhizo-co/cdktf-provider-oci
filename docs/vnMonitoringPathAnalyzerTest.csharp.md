# `vnMonitoringPathAnalyzerTest` Submodule <a name="`vnMonitoringPathAnalyzerTest` Submodule" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VnMonitoringPathAnalyzerTest <a name="VnMonitoringPathAnalyzerTest" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test oci_vn_monitoring_path_analyzer_test}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTest(Construct Scope, string Id, VnMonitoringPathAnalyzerTestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig">VnMonitoringPathAnalyzerTestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig">VnMonitoringPathAnalyzerTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint">PutDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters">PutProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions">PutQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint">PutSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetProtocolParameters">ResetProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetQueryOptions">ResetQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationEndpoint` <a name="PutDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint"></a>

```csharp
private void PutDestinationEndpoint(VnMonitoringPathAnalyzerTestDestinationEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putDestinationEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---

##### `PutProtocolParameters` <a name="PutProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters"></a>

```csharp
private void PutProtocolParameters(VnMonitoringPathAnalyzerTestProtocolParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putProtocolParameters.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---

##### `PutQueryOptions` <a name="PutQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions"></a>

```csharp
private void PutQueryOptions(VnMonitoringPathAnalyzerTestQueryOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putQueryOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---

##### `PutSourceEndpoint` <a name="PutSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint"></a>

```csharp
private void PutSourceEndpoint(VnMonitoringPathAnalyzerTestSourceEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putSourceEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts"></a>

```csharp
private void PutTimeouts(VnMonitoringPathAnalyzerTestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProtocolParameters` <a name="ResetProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetProtocolParameters"></a>

```csharp
private void ResetProtocolParameters()
```

##### `ResetQueryOptions` <a name="ResetQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetQueryOptions"></a>

```csharp
private void ResetQueryOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalyzerTest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalyzerTest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalyzerTest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

VnMonitoringPathAnalyzerTest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VnMonitoringPathAnalyzerTest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VnMonitoringPathAnalyzerTest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VnMonitoringPathAnalyzerTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VnMonitoringPathAnalyzerTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference">VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference">VnMonitoringPathAnalyzerTestProtocolParametersOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference">VnMonitoringPathAnalyzerTestQueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference">VnMonitoringPathAnalyzerTestSourceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference">VnMonitoringPathAnalyzerTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpointInput">DestinationEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParametersInput">ProtocolParametersInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptionsInput">QueryOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpointInput">SourceEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpoint"></a>

```csharp
public VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference DestinationEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference">VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference</a>

---

##### `ProtocolParameters`<sup>Required</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParameters"></a>

```csharp
public VnMonitoringPathAnalyzerTestProtocolParametersOutputReference ProtocolParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference">VnMonitoringPathAnalyzerTestProtocolParametersOutputReference</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptions"></a>

```csharp
public VnMonitoringPathAnalyzerTestQueryOptionsOutputReference QueryOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference">VnMonitoringPathAnalyzerTestQueryOptionsOutputReference</a>

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpoint"></a>

```csharp
public VnMonitoringPathAnalyzerTestSourceEndpointOutputReference SourceEndpoint { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference">VnMonitoringPathAnalyzerTestSourceEndpointOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeouts"></a>

```csharp
public VnMonitoringPathAnalyzerTestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference">VnMonitoringPathAnalyzerTestTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DestinationEndpointInput`<sup>Optional</sup> <a name="DestinationEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.destinationEndpointInput"></a>

```csharp
public VnMonitoringPathAnalyzerTestDestinationEndpoint DestinationEndpointInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `ProtocolParametersInput`<sup>Optional</sup> <a name="ProtocolParametersInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocolParametersInput"></a>

```csharp
public VnMonitoringPathAnalyzerTestProtocolParameters ProtocolParametersInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---

##### `QueryOptionsInput`<sup>Optional</sup> <a name="QueryOptionsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.queryOptionsInput"></a>

```csharp
public VnMonitoringPathAnalyzerTestQueryOptions QueryOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---

##### `SourceEndpointInput`<sup>Optional</sup> <a name="SourceEndpointInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.sourceEndpointInput"></a>

```csharp
public VnMonitoringPathAnalyzerTestSourceEndpoint SourceEndpointInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VnMonitoringPathAnalyzerTestConfig <a name="VnMonitoringPathAnalyzerTestConfig" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    VnMonitoringPathAnalyzerTestDestinationEndpoint DestinationEndpoint,
    double Protocol,
    VnMonitoringPathAnalyzerTestSourceEndpoint SourceEndpoint,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    VnMonitoringPathAnalyzerTestProtocolParameters ProtocolParameters = null,
    VnMonitoringPathAnalyzerTestQueryOptions QueryOptions = null,
    VnMonitoringPathAnalyzerTestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.destinationEndpoint">DestinationEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | destination_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocol">Protocol</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.sourceEndpoint">SourceEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | source_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocolParameters">ProtocolParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | protocol_parameters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.queryOptions">QueryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | query_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#compartment_id VnMonitoringPathAnalyzerTest#compartment_id}.

---

##### `DestinationEndpoint`<sup>Required</sup> <a name="DestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.destinationEndpoint"></a>

```csharp
public VnMonitoringPathAnalyzerTestDestinationEndpoint DestinationEndpoint { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

destination_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_endpoint VnMonitoringPathAnalyzerTest#destination_endpoint}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol VnMonitoringPathAnalyzerTest#protocol}.

---

##### `SourceEndpoint`<sup>Required</sup> <a name="SourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.sourceEndpoint"></a>

```csharp
public VnMonitoringPathAnalyzerTestSourceEndpoint SourceEndpoint { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

source_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_endpoint VnMonitoringPathAnalyzerTest#source_endpoint}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#defined_tags VnMonitoringPathAnalyzerTest#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#display_name VnMonitoringPathAnalyzerTest#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#freeform_tags VnMonitoringPathAnalyzerTest#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#id VnMonitoringPathAnalyzerTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtocolParameters`<sup>Optional</sup> <a name="ProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.protocolParameters"></a>

```csharp
public VnMonitoringPathAnalyzerTestProtocolParameters ProtocolParameters { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

protocol_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#protocol_parameters VnMonitoringPathAnalyzerTest#protocol_parameters}

---

##### `QueryOptions`<sup>Optional</sup> <a name="QueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.queryOptions"></a>

```csharp
public VnMonitoringPathAnalyzerTestQueryOptions QueryOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#query_options VnMonitoringPathAnalyzerTest#query_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestConfig.property.timeouts"></a>

```csharp
public VnMonitoringPathAnalyzerTestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts">VnMonitoringPathAnalyzerTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#timeouts VnMonitoringPathAnalyzerTest#timeouts}

---

### VnMonitoringPathAnalyzerTestDestinationEndpoint <a name="VnMonitoringPathAnalyzerTestDestinationEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestDestinationEndpoint {
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.listenerId">ListenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vnicId">VnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.listenerId"></a>

```csharp
public string ListenerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint.property.vnicId"></a>

```csharp
public string VnicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

### VnMonitoringPathAnalyzerTestProtocolParameters <a name="VnMonitoringPathAnalyzerTestProtocolParameters" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestProtocolParameters {
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.destinationPort">DestinationPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_port VnMonitoringPathAnalyzerTest#destination_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpCode">IcmpCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_code VnMonitoringPathAnalyzerTest#icmp_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpType">IcmpType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_type VnMonitoringPathAnalyzerTest#icmp_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.sourcePort">SourcePort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_port VnMonitoringPathAnalyzerTest#source_port}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.destinationPort"></a>

```csharp
public double DestinationPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#destination_port VnMonitoringPathAnalyzerTest#destination_port}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpCode"></a>

```csharp
public double IcmpCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_code VnMonitoringPathAnalyzerTest#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.icmpType"></a>

```csharp
public double IcmpType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#icmp_type VnMonitoringPathAnalyzerTest#icmp_type}.

---

##### `SourcePort`<sup>Optional</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters.property.sourcePort"></a>

```csharp
public double SourcePort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#source_port VnMonitoringPathAnalyzerTest#source_port}.

---

### VnMonitoringPathAnalyzerTestQueryOptions <a name="VnMonitoringPathAnalyzerTestQueryOptions" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestQueryOptions {
    object IsBiDirectionalAnalysis = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#is_bi_directional_analysis VnMonitoringPathAnalyzerTest#is_bi_directional_analysis}. |

---

##### `IsBiDirectionalAnalysis`<sup>Optional</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions.property.isBiDirectionalAnalysis"></a>

```csharp
public object IsBiDirectionalAnalysis { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#is_bi_directional_analysis VnMonitoringPathAnalyzerTest#is_bi_directional_analysis}.

---

### VnMonitoringPathAnalyzerTestSourceEndpoint <a name="VnMonitoringPathAnalyzerTestSourceEndpoint" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestSourceEndpoint {
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
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.listenerId">ListenerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vnicId">VnicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#type VnMonitoringPathAnalyzerTest#type}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#address VnMonitoringPathAnalyzerTest#address}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#instance_id VnMonitoringPathAnalyzerTest#instance_id}.

---

##### `ListenerId`<sup>Optional</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.listenerId"></a>

```csharp
public string ListenerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#listener_id VnMonitoringPathAnalyzerTest#listener_id}.

---

##### `LoadBalancerId`<sup>Optional</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#load_balancer_id VnMonitoringPathAnalyzerTest#load_balancer_id}.

---

##### `NetworkLoadBalancerId`<sup>Optional</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#network_load_balancer_id VnMonitoringPathAnalyzerTest#network_load_balancer_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#subnet_id VnMonitoringPathAnalyzerTest#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vlan_id VnMonitoringPathAnalyzerTest#vlan_id}.

---

##### `VnicId`<sup>Optional</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint.property.vnicId"></a>

```csharp
public string VnicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#vnic_id VnMonitoringPathAnalyzerTest#vnic_id}.

---

### VnMonitoringPathAnalyzerTestTimeouts <a name="VnMonitoringPathAnalyzerTestTimeouts" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#create VnMonitoringPathAnalyzerTest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#delete VnMonitoringPathAnalyzerTest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#update VnMonitoringPathAnalyzerTest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#create VnMonitoringPathAnalyzerTest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#delete VnMonitoringPathAnalyzerTest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vn_monitoring_path_analyzer_test#update VnMonitoringPathAnalyzerTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference <a name="VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetListenerId"></a>

```csharp
private void ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetLoadBalancerId"></a>

```csharp
private void ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```csharp
private void ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.resetVnicId"></a>

```csharp
private void ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerIdInput"></a>

```csharp
public string ListenerIdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```csharp
public string NetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicIdInput"></a>

```csharp
public string VnicIdInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpointOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalyzerTestDestinationEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestDestinationEndpoint">VnMonitoringPathAnalyzerTestDestinationEndpoint</a>

---


### VnMonitoringPathAnalyzerTestProtocolParametersOutputReference <a name="VnMonitoringPathAnalyzerTestProtocolParametersOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestProtocolParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetSourcePort">ResetSourcePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetDestinationPort"></a>

```csharp
private void ResetDestinationPort()
```

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetSourcePort` <a name="ResetSourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.resetSourcePort"></a>

```csharp
private void ResetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePortInput">SourcePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode">IcmpCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType">IcmpType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort">SourcePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPortInput"></a>

```csharp
public double DestinationPortInput { get; }
```

- *Type:* double

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCodeInput"></a>

```csharp
public double IcmpCodeInput { get; }
```

- *Type:* double

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpTypeInput"></a>

```csharp
public double IcmpTypeInput { get; }
```

- *Type:* double

---

##### `SourcePortInput`<sup>Optional</sup> <a name="SourcePortInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePortInput"></a>

```csharp
public double SourcePortInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpCode"></a>

```csharp
public double IcmpCode { get; }
```

- *Type:* double

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.icmpType"></a>

```csharp
public double IcmpType { get; }
```

- *Type:* double

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.sourcePort"></a>

```csharp
public double SourcePort { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParametersOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalyzerTestProtocolParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestProtocolParameters">VnMonitoringPathAnalyzerTestProtocolParameters</a>

---


### VnMonitoringPathAnalyzerTestQueryOptionsOutputReference <a name="VnMonitoringPathAnalyzerTestQueryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestQueryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resetIsBiDirectionalAnalysis">ResetIsBiDirectionalAnalysis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsBiDirectionalAnalysis` <a name="ResetIsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.resetIsBiDirectionalAnalysis"></a>

```csharp
private void ResetIsBiDirectionalAnalysis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput">IsBiDirectionalAnalysisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis">IsBiDirectionalAnalysis</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsBiDirectionalAnalysisInput`<sup>Optional</sup> <a name="IsBiDirectionalAnalysisInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysisInput"></a>

```csharp
public object IsBiDirectionalAnalysisInput { get; }
```

- *Type:* object

---

##### `IsBiDirectionalAnalysis`<sup>Required</sup> <a name="IsBiDirectionalAnalysis" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.isBiDirectionalAnalysis"></a>

```csharp
public object IsBiDirectionalAnalysis { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptionsOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalyzerTestQueryOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestQueryOptions">VnMonitoringPathAnalyzerTestQueryOptions</a>

---


### VnMonitoringPathAnalyzerTestSourceEndpointOutputReference <a name="VnMonitoringPathAnalyzerTestSourceEndpointOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestSourceEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetListenerId">ResetListenerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetLoadBalancerId">ResetLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetNetworkLoadBalancerId">ResetNetworkLoadBalancerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVnicId">ResetVnicId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetListenerId` <a name="ResetListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetListenerId"></a>

```csharp
private void ResetListenerId()
```

##### `ResetLoadBalancerId` <a name="ResetLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetLoadBalancerId"></a>

```csharp
private void ResetLoadBalancerId()
```

##### `ResetNetworkLoadBalancerId` <a name="ResetNetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetNetworkLoadBalancerId"></a>

```csharp
private void ResetNetworkLoadBalancerId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

##### `ResetVnicId` <a name="ResetVnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.resetVnicId"></a>

```csharp
private void ResetVnicId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerIdInput">ListenerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicIdInput">VnicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId">ListenerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId">VnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerIdInput"></a>

```csharp
public string ListenerIdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerIdInput"></a>

```csharp
public string NetworkLoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `VnicIdInput`<sup>Optional</sup> <a name="VnicIdInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicIdInput"></a>

```csharp
public string VnicIdInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.listenerId"></a>

```csharp
public string ListenerId { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.networkLoadBalancerId"></a>

```csharp
public string NetworkLoadBalancerId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.vnicId"></a>

```csharp
public string VnicId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpointOutputReference.property.internalValue"></a>

```csharp
public VnMonitoringPathAnalyzerTestSourceEndpoint InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestSourceEndpoint">VnMonitoringPathAnalyzerTestSourceEndpoint</a>

---


### VnMonitoringPathAnalyzerTestTimeoutsOutputReference <a name="VnMonitoringPathAnalyzerTestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new VnMonitoringPathAnalyzerTestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vnMonitoringPathAnalyzerTest.VnMonitoringPathAnalyzerTestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



