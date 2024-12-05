# `stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule <a name="`stackMonitoringMonitoredResourcesAssociateMonitoredResource` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResource <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource oci_stack_monitoring_monitored_resources_associate_monitored_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResource(Construct Scope, string Id, StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig">StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig">StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts"></a>

```csharp
private void PutTimeouts(StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesAssociateMonitoredResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesAssociateMonitoredResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesAssociateMonitoredResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

StackMonitoringMonitoredResourcesAssociateMonitoredResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesAssociateMonitoredResource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMonitoredResourcesAssociateMonitoredResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesAssociateMonitoredResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails">DestinationResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails">SourceResourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput">AssociationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput">DestinationResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType">AssociationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId">DestinationResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId">SourceResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `DestinationResourceDetails`<sup>Required</sup> <a name="DestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceDetails"></a>

```csharp
public StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList DestinationResourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList</a>

---

##### `SourceResourceDetails`<sup>Required</sup> <a name="SourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceDetails"></a>

```csharp
public StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList SourceResourceDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList</a>

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference</a>

---

##### `AssociationTypeInput`<sup>Optional</sup> <a name="AssociationTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationTypeInput"></a>

```csharp
public string AssociationTypeInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DestinationResourceIdInput`<sup>Optional</sup> <a name="DestinationResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceIdInput"></a>

```csharp
public string DestinationResourceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceIdInput"></a>

```csharp
public string SourceResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.associationType"></a>

```csharp
public string AssociationType { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.destinationResourceId"></a>

```csharp
public string DestinationResourceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.sourceResourceId"></a>

```csharp
public string SourceResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssociationType,
    string CompartmentId,
    string DestinationResourceId,
    string SourceResourceId,
    string Id = null,
    StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType">AssociationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId">DestinationResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.associationType"></a>

```csharp
public string AssociationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#association_type StackMonitoringMonitoredResourcesAssociateMonitoredResource#association_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#compartment_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#compartment_id}.

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.destinationResourceId"></a>

```csharp
public string DestinationResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#destination_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#destination_resource_id}.

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.sourceResourceId"></a>

```csharp
public string SourceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#source_resource_id StackMonitoringMonitoredResourcesAssociateMonitoredResource#source_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#id StackMonitoringMonitoredResourcesAssociateMonitoredResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceConfig.property.timeouts"></a>

```csharp
public StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts">StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#timeouts StackMonitoringMonitoredResourcesAssociateMonitoredResource#timeouts}

---

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails {

};
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails {

};
```


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#create StackMonitoringMonitoredResourcesAssociateMonitoredResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#delete StackMonitoringMonitoredResourcesAssociateMonitoredResource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_associate_monitored_resource#update StackMonitoringMonitoredResourcesAssociateMonitoredResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get"></a>

```csharp
private StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetailsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceDestinationResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get"></a>

```csharp
private StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetailsOutputReference.property.internalValue"></a>

```csharp
public StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails">StackMonitoringMonitoredResourcesAssociateMonitoredResourceSourceResourceDetails</a>

---


### StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesAssociateMonitoredResource.StackMonitoringMonitoredResourcesAssociateMonitoredResourceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



