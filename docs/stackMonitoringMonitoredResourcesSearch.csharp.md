# `stackMonitoringMonitoredResourcesSearch` Submodule <a name="`stackMonitoringMonitoredResourcesSearch` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesSearch <a name="StackMonitoringMonitoredResourcesSearch" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search oci_stack_monitoring_monitored_resources_search}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearch(Construct Scope, string Id, StackMonitoringMonitoredResourcesSearchConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig">StackMonitoringMonitoredResourcesSearchConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig">StackMonitoringMonitoredResourcesSearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds">ResetCompartmentIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields">ResetExcludeFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains">ResetHostNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense">ResetLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates">ResetLifecycleStates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId">ResetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains">ResetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals">ResetPropertyEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory">ResetResourceCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone">ResetResourceTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo">ResetTimeUpdatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan">ResetTimeUpdatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts"></a>

```csharp
private void PutTimeouts(StackMonitoringMonitoredResourcesSearchTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

---

##### `ResetCompartmentIds` <a name="ResetCompartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds"></a>

```csharp
private void ResetCompartmentIds()
```

##### `ResetExcludeFields` <a name="ResetExcludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields"></a>

```csharp
private void ResetExcludeFields()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetHostName` <a name="ResetHostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName"></a>

```csharp
private void ResetHostName()
```

##### `ResetHostNameContains` <a name="ResetHostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains"></a>

```csharp
private void ResetHostNameContains()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicense` <a name="ResetLicense" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense"></a>

```csharp
private void ResetLicense()
```

##### `ResetLifecycleStates` <a name="ResetLifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates"></a>

```csharp
private void ResetLifecycleStates()
```

##### `ResetManagementAgentId` <a name="ResetManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId"></a>

```csharp
private void ResetManagementAgentId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains"></a>

```csharp
private void ResetNameContains()
```

##### `ResetPropertyEquals` <a name="ResetPropertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals"></a>

```csharp
private void ResetPropertyEquals()
```

##### `ResetResourceCategory` <a name="ResetResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory"></a>

```csharp
private void ResetResourceCategory()
```

##### `ResetResourceTimeZone` <a name="ResetResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone"></a>

```csharp
private void ResetResourceTimeZone()
```

##### `ResetSourceType` <a name="ResetSourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType"></a>

```csharp
private void ResetSourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeUpdatedGreaterThanOrEqualTo` <a name="ResetTimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeUpdatedGreaterThanOrEqualTo()
```

##### `ResetTimeUpdatedLessThan` <a name="ResetTimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan"></a>

```csharp
private void ResetTimeUpdatedLessThan()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesSearch.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesSearch.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesSearch.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesSearch.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesSearch to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResourcesSearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesSearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput">CompartmentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput">ExcludeFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput">FieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput">HostNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput">LicenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput">LifecycleStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput">ManagementAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput">NameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput">PropertyEqualsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput">ResourceCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput">ResourceTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput">TimeUpdatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput">TimeUpdatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds">CompartmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields">ExcludeFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields">Fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains">HostNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license">License</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates">LifecycleStates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains">NameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals">PropertyEquals</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory">ResourceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone">ResourceTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo">TimeUpdatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan">TimeUpdatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items"></a>

```csharp
public StackMonitoringMonitoredResourcesSearchItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdsInput`<sup>Optional</sup> <a name="CompartmentIdsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput"></a>

```csharp
public string[] CompartmentIdsInput { get; }
```

- *Type:* string[]

---

##### `ExcludeFieldsInput`<sup>Optional</sup> <a name="ExcludeFieldsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput"></a>

```csharp
public string[] ExcludeFieldsInput { get; }
```

- *Type:* string[]

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput"></a>

```csharp
public string[] FieldsInput { get; }
```

- *Type:* string[]

---

##### `HostNameContainsInput`<sup>Optional</sup> <a name="HostNameContainsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput"></a>

```csharp
public string HostNameContainsInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput"></a>

```csharp
public string LicenseInput { get; }
```

- *Type:* string

---

##### `LifecycleStatesInput`<sup>Optional</sup> <a name="LifecycleStatesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput"></a>

```csharp
public string[] LifecycleStatesInput { get; }
```

- *Type:* string[]

---

##### `ManagementAgentIdInput`<sup>Optional</sup> <a name="ManagementAgentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput"></a>

```csharp
public string ManagementAgentIdInput { get; }
```

- *Type:* string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput"></a>

```csharp
public string NameContainsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertyEqualsInput`<sup>Optional</sup> <a name="PropertyEqualsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertyEqualsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceCategoryInput`<sup>Optional</sup> <a name="ResourceCategoryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput"></a>

```csharp
public string ResourceCategoryInput { get; }
```

- *Type:* string

---

##### `ResourceTimeZoneInput`<sup>Optional</sup> <a name="ResourceTimeZoneInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput"></a>

```csharp
public string ResourceTimeZoneInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeUpdatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeUpdatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeUpdatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeUpdatedLessThanInput`<sup>Optional</sup> <a name="TimeUpdatedLessThanInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput"></a>

```csharp
public string TimeUpdatedLessThanInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIds`<sup>Required</sup> <a name="CompartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds"></a>

```csharp
public string[] CompartmentIds { get; }
```

- *Type:* string[]

---

##### `ExcludeFields`<sup>Required</sup> <a name="ExcludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields"></a>

```csharp
public string[] ExcludeFields { get; }
```

- *Type:* string[]

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields"></a>

```csharp
public string[] Fields { get; }
```

- *Type:* string[]

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `HostNameContains`<sup>Required</sup> <a name="HostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains"></a>

```csharp
public string HostNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `License`<sup>Required</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license"></a>

```csharp
public string License { get; }
```

- *Type:* string

---

##### `LifecycleStates`<sup>Required</sup> <a name="LifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates"></a>

```csharp
public string[] LifecycleStates { get; }
```

- *Type:* string[]

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains"></a>

```csharp
public string NameContains { get; }
```

- *Type:* string

---

##### `PropertyEquals`<sup>Required</sup> <a name="PropertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertyEquals { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceCategory`<sup>Required</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory"></a>

```csharp
public string ResourceCategory { get; }
```

- *Type:* string

---

##### `ResourceTimeZone`<sup>Required</sup> <a name="ResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone"></a>

```csharp
public string ResourceTimeZone { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

##### `TimeUpdatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeUpdatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeUpdatedLessThan`<sup>Required</sup> <a name="TimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan"></a>

```csharp
public string TimeUpdatedLessThan { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesSearchConfig <a name="StackMonitoringMonitoredResourcesSearchConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string[] CompartmentIds = null,
    string[] ExcludeFields = null,
    string ExternalId = null,
    string[] Fields = null,
    string HostName = null,
    string HostNameContains = null,
    string Id = null,
    string License = null,
    string[] LifecycleStates = null,
    string ManagementAgentId = null,
    string Name = null,
    string NameContains = null,
    System.Collections.Generic.IDictionary<string, string> PropertyEquals = null,
    string ResourceCategory = null,
    string ResourceTimeZone = null,
    string SourceType = null,
    string State = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null,
    StackMonitoringMonitoredResourcesSearchTimeouts Timeouts = null,
    string TimeUpdatedGreaterThanOrEqualTo = null,
    string TimeUpdatedLessThan = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds">CompartmentIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields">ExcludeFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields">Fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains">HostNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license">License</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates">LifecycleStates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains">NameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals">PropertyEquals</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory">ResourceCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone">ResourceTimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo">TimeUpdatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan">TimeUpdatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}.

---

##### `CompartmentIds`<sup>Optional</sup> <a name="CompartmentIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds"></a>

```csharp
public string[] CompartmentIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}.

---

##### `ExcludeFields`<sup>Optional</sup> <a name="ExcludeFields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields"></a>

```csharp
public string[] ExcludeFields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields"></a>

```csharp
public string[] Fields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}.

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}.

---

##### `HostNameContains`<sup>Optional</sup> <a name="HostNameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains"></a>

```csharp
public string HostNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `License`<sup>Optional</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license"></a>

```csharp
public string License { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}.

---

##### `LifecycleStates`<sup>Optional</sup> <a name="LifecycleStates" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates"></a>

```csharp
public string[] LifecycleStates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}.

---

##### `ManagementAgentId`<sup>Optional</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains"></a>

```csharp
public string NameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}.

---

##### `PropertyEquals`<sup>Optional</sup> <a name="PropertyEquals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertyEquals { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}.

---

##### `ResourceCategory`<sup>Optional</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory"></a>

```csharp
public string ResourceCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}.

---

##### `ResourceTimeZone`<sup>Optional</sup> <a name="ResourceTimeZone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone"></a>

```csharp
public string ResourceTimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourcesSearchTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#timeouts StackMonitoringMonitoredResourcesSearch#timeouts}

---

##### `TimeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeUpdatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}.

---

##### `TimeUpdatedLessThan`<sup>Optional</sup> <a name="TimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan"></a>

```csharp
public string TimeUpdatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}.

---

### StackMonitoringMonitoredResourcesSearchItems <a name="StackMonitoringMonitoredResourcesSearchItems" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchItems {

};
```


### StackMonitoringMonitoredResourcesSearchItemsProperties <a name="StackMonitoringMonitoredResourcesSearchItemsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchItemsProperties {

};
```


### StackMonitoringMonitoredResourcesSearchTimeouts <a name="StackMonitoringMonitoredResourcesSearchTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesSearchItemsList <a name="StackMonitoringMonitoredResourcesSearchItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get"></a>

```csharp
private StackMonitoringMonitoredResourcesSearchItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesSearchItemsOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license">License</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId">ManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory">ResourceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `License`<sup>Required</sup> <a name="License" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license"></a>

```csharp
public string License { get; }
```

- *Type:* string

---

##### `ManagementAgentId`<sup>Required</sup> <a name="ManagementAgentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId"></a>

```csharp
public string ManagementAgentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties"></a>

```csharp
public StackMonitoringMonitoredResourcesSearchItemsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a>

---

##### `ResourceCategory`<sup>Required</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory"></a>

```csharp
public string ResourceCategory { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMonitoredResourcesSearchItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a>

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesList <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchItemsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get"></a>

```csharp
private StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMonitoredResourcesSearchItemsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a>

---


### StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



