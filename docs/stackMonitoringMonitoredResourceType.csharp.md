# `stackMonitoringMonitoredResourceType` Submodule <a name="`stackMonitoringMonitoredResourceType` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourceType <a name="StackMonitoringMonitoredResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type oci_stack_monitoring_monitored_resource_type}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceType(Construct Scope, string Id, StackMonitoringMonitoredResourceTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig">StackMonitoringMonitoredResourceTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig">StackMonitoringMonitoredResourceTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetricNamespace">ResetMetricNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetResourceCategory">ResetResourceCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putMetadata"></a>

```csharp
private void PutMetadata(StackMonitoringMonitoredResourceTypeMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putTimeouts"></a>

```csharp
private void PutTimeouts(StackMonitoringMonitoredResourceTypeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts">StackMonitoringMonitoredResourceTypeTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetricNamespace` <a name="ResetMetricNamespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetMetricNamespace"></a>

```csharp
private void ResetMetricNamespace()
```

##### `ResetResourceCategory` <a name="ResetResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetResourceCategory"></a>

```csharp
private void ResetResourceCategory()
```

##### `ResetSourceType` <a name="ResetSourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetSourceType"></a>

```csharp
private void ResetSourceType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourceType resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourceType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourceType resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResourceType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResourceType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourceType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference">StackMonitoringMonitoredResourceTypeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference">StackMonitoringMonitoredResourceTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadataInput">MetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespaceInput">MetricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategoryInput">ResourceCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategory">ResourceCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadata"></a>

```csharp
public StackMonitoringMonitoredResourceTypeMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference">StackMonitoringMonitoredResourceTypeMetadataOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourceTypeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference">StackMonitoringMonitoredResourceTypeTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metadataInput"></a>

```csharp
public StackMonitoringMonitoredResourceTypeMetadata MetadataInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

---

##### `MetricNamespaceInput`<sup>Optional</sup> <a name="MetricNamespaceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespaceInput"></a>

```csharp
public string MetricNamespaceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceCategoryInput`<sup>Optional</sup> <a name="ResourceCategoryInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategoryInput"></a>

```csharp
public string ResourceCategoryInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceCategory`<sup>Required</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.resourceCategory"></a>

```csharp
public string ResourceCategory { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourceTypeConfig <a name="StackMonitoringMonitoredResourceTypeConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Name,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    StackMonitoringMonitoredResourceTypeMetadata Metadata = null,
    string MetricNamespace = null,
    string ResourceCategory = null,
    string SourceType = null,
    StackMonitoringMonitoredResourceTypeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#compartment_id StackMonitoringMonitoredResourceType#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#name StackMonitoringMonitoredResourceType#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#defined_tags StackMonitoringMonitoredResourceType#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#description StackMonitoringMonitoredResourceType#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#display_name StackMonitoringMonitoredResourceType#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#freeform_tags StackMonitoringMonitoredResourceType#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#id StackMonitoringMonitoredResourceType#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metricNamespace">MetricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#metric_namespace StackMonitoringMonitoredResourceType#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.resourceCategory">ResourceCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#resource_category StackMonitoringMonitoredResourceType#resource_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#source_type StackMonitoringMonitoredResourceType#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts">StackMonitoringMonitoredResourceTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#compartment_id StackMonitoringMonitoredResourceType#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#name StackMonitoringMonitoredResourceType#name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#defined_tags StackMonitoringMonitoredResourceType#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#description StackMonitoringMonitoredResourceType#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#display_name StackMonitoringMonitoredResourceType#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#freeform_tags StackMonitoringMonitoredResourceType#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#id StackMonitoringMonitoredResourceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metadata"></a>

```csharp
public StackMonitoringMonitoredResourceTypeMetadata Metadata { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#metadata StackMonitoringMonitoredResourceType#metadata}

---

##### `MetricNamespace`<sup>Optional</sup> <a name="MetricNamespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.metricNamespace"></a>

```csharp
public string MetricNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#metric_namespace StackMonitoringMonitoredResourceType#metric_namespace}.

---

##### `ResourceCategory`<sup>Optional</sup> <a name="ResourceCategory" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.resourceCategory"></a>

```csharp
public string ResourceCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#resource_category StackMonitoringMonitoredResourceType#resource_category}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#source_type StackMonitoringMonitoredResourceType#source_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeConfig.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourceTypeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts">StackMonitoringMonitoredResourceTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#timeouts StackMonitoringMonitoredResourceType#timeouts}

---

### StackMonitoringMonitoredResourceTypeMetadata <a name="StackMonitoringMonitoredResourceTypeMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeMetadata {
    string Format,
    string[] AgentProperties = null,
    string[] RequiredProperties = null,
    object UniquePropertySets = null,
    string[] ValidPropertiesForCreate = null,
    string[] ValidPropertiesForUpdate = null,
    System.Collections.Generic.IDictionary<string, string> ValidPropertyValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#format StackMonitoringMonitoredResourceType#format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.agentProperties">AgentProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#agent_properties StackMonitoringMonitoredResourceType#agent_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.requiredProperties">RequiredProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#required_properties StackMonitoringMonitoredResourceType#required_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.uniquePropertySets">UniquePropertySets</a></code> | <code>object</code> | unique_property_sets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForCreate">ValidPropertiesForCreate</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_create StackMonitoringMonitoredResourceType#valid_properties_for_create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForUpdate">ValidPropertiesForUpdate</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_update StackMonitoringMonitoredResourceType#valid_properties_for_update}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertyValues">ValidPropertyValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_property_values StackMonitoringMonitoredResourceType#valid_property_values}. |

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#format StackMonitoringMonitoredResourceType#format}.

---

##### `AgentProperties`<sup>Optional</sup> <a name="AgentProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.agentProperties"></a>

```csharp
public string[] AgentProperties { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#agent_properties StackMonitoringMonitoredResourceType#agent_properties}.

---

##### `RequiredProperties`<sup>Optional</sup> <a name="RequiredProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.requiredProperties"></a>

```csharp
public string[] RequiredProperties { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#required_properties StackMonitoringMonitoredResourceType#required_properties}.

---

##### `UniquePropertySets`<sup>Optional</sup> <a name="UniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.uniquePropertySets"></a>

```csharp
public object UniquePropertySets { get; set; }
```

- *Type:* object

unique_property_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#unique_property_sets StackMonitoringMonitoredResourceType#unique_property_sets}

---

##### `ValidPropertiesForCreate`<sup>Optional</sup> <a name="ValidPropertiesForCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForCreate"></a>

```csharp
public string[] ValidPropertiesForCreate { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_create StackMonitoringMonitoredResourceType#valid_properties_for_create}.

---

##### `ValidPropertiesForUpdate`<sup>Optional</sup> <a name="ValidPropertiesForUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertiesForUpdate"></a>

```csharp
public string[] ValidPropertiesForUpdate { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_update StackMonitoringMonitoredResourceType#valid_properties_for_update}.

---

##### `ValidPropertyValues`<sup>Optional</sup> <a name="ValidPropertyValues" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata.property.validPropertyValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidPropertyValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#valid_property_values StackMonitoringMonitoredResourceType#valid_property_values}.

---

### StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets <a name="StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets {
    string[] Properties
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets.property.properties">Properties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#properties StackMonitoringMonitoredResourceType#properties}. |

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets.property.properties"></a>

```csharp
public string[] Properties { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#properties StackMonitoringMonitoredResourceType#properties}.

---

### StackMonitoringMonitoredResourceTypeTimeouts <a name="StackMonitoringMonitoredResourceTypeTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#create StackMonitoringMonitoredResourceType#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#delete StackMonitoringMonitoredResourceType#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#update StackMonitoringMonitoredResourceType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#create StackMonitoringMonitoredResourceType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#delete StackMonitoringMonitoredResourceType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_type#update StackMonitoringMonitoredResourceType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourceTypeMetadataOutputReference <a name="StackMonitoringMonitoredResourceTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.putUniquePropertySets">PutUniquePropertySets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetAgentProperties">ResetAgentProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetRequiredProperties">ResetRequiredProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetUniquePropertySets">ResetUniquePropertySets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForCreate">ResetValidPropertiesForCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForUpdate">ResetValidPropertiesForUpdate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertyValues">ResetValidPropertyValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUniquePropertySets` <a name="PutUniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.putUniquePropertySets"></a>

```csharp
private void PutUniquePropertySets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.putUniquePropertySets.parameter.value"></a>

- *Type:* object

---

##### `ResetAgentProperties` <a name="ResetAgentProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetAgentProperties"></a>

```csharp
private void ResetAgentProperties()
```

##### `ResetRequiredProperties` <a name="ResetRequiredProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetRequiredProperties"></a>

```csharp
private void ResetRequiredProperties()
```

##### `ResetUniquePropertySets` <a name="ResetUniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetUniquePropertySets"></a>

```csharp
private void ResetUniquePropertySets()
```

##### `ResetValidPropertiesForCreate` <a name="ResetValidPropertiesForCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForCreate"></a>

```csharp
private void ResetValidPropertiesForCreate()
```

##### `ResetValidPropertiesForUpdate` <a name="ResetValidPropertiesForUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertiesForUpdate"></a>

```csharp
private void ResetValidPropertiesForUpdate()
```

##### `ResetValidPropertyValues` <a name="ResetValidPropertyValues" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.resetValidPropertyValues"></a>

```csharp
private void ResetValidPropertyValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySets">UniquePropertySets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList">StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentPropertiesInput">AgentPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredPropertiesInput">RequiredPropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySetsInput">UniquePropertySetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreateInput">ValidPropertiesForCreateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdateInput">ValidPropertiesForUpdateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValuesInput">ValidPropertyValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentProperties">AgentProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredProperties">RequiredProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreate">ValidPropertiesForCreate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdate">ValidPropertiesForUpdate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValues">ValidPropertyValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UniquePropertySets`<sup>Required</sup> <a name="UniquePropertySets" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySets"></a>

```csharp
public StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList UniquePropertySets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList">StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList</a>

---

##### `AgentPropertiesInput`<sup>Optional</sup> <a name="AgentPropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentPropertiesInput"></a>

```csharp
public string[] AgentPropertiesInput { get; }
```

- *Type:* string[]

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `RequiredPropertiesInput`<sup>Optional</sup> <a name="RequiredPropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredPropertiesInput"></a>

```csharp
public string[] RequiredPropertiesInput { get; }
```

- *Type:* string[]

---

##### `UniquePropertySetsInput`<sup>Optional</sup> <a name="UniquePropertySetsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.uniquePropertySetsInput"></a>

```csharp
public object UniquePropertySetsInput { get; }
```

- *Type:* object

---

##### `ValidPropertiesForCreateInput`<sup>Optional</sup> <a name="ValidPropertiesForCreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreateInput"></a>

```csharp
public string[] ValidPropertiesForCreateInput { get; }
```

- *Type:* string[]

---

##### `ValidPropertiesForUpdateInput`<sup>Optional</sup> <a name="ValidPropertiesForUpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdateInput"></a>

```csharp
public string[] ValidPropertiesForUpdateInput { get; }
```

- *Type:* string[]

---

##### `ValidPropertyValuesInput`<sup>Optional</sup> <a name="ValidPropertyValuesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidPropertyValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AgentProperties`<sup>Required</sup> <a name="AgentProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.agentProperties"></a>

```csharp
public string[] AgentProperties { get; }
```

- *Type:* string[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `RequiredProperties`<sup>Required</sup> <a name="RequiredProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.requiredProperties"></a>

```csharp
public string[] RequiredProperties { get; }
```

- *Type:* string[]

---

##### `ValidPropertiesForCreate`<sup>Required</sup> <a name="ValidPropertiesForCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForCreate"></a>

```csharp
public string[] ValidPropertiesForCreate { get; }
```

- *Type:* string[]

---

##### `ValidPropertiesForUpdate`<sup>Required</sup> <a name="ValidPropertiesForUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertiesForUpdate"></a>

```csharp
public string[] ValidPropertiesForUpdate { get; }
```

- *Type:* string[]

---

##### `ValidPropertyValues`<sup>Required</sup> <a name="ValidPropertyValues" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.validPropertyValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidPropertyValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMonitoredResourceTypeMetadata InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadata">StackMonitoringMonitoredResourceTypeMetadata</a>

---


### StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList <a name="StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.get"></a>

```csharp
private StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference <a name="StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.properties">Properties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.propertiesInput"></a>

```csharp
public string[] PropertiesInput { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.properties"></a>

```csharp
public string[] Properties { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StackMonitoringMonitoredResourceTypeTimeoutsOutputReference <a name="StackMonitoringMonitoredResourceTypeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourceTypeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceType.StackMonitoringMonitoredResourceTypeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



