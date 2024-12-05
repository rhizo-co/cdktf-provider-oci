# `fleetSoftwareUpdateFsuCollection` Submodule <a name="`fleetSoftwareUpdateFsuCollection` Submodule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetSoftwareUpdateFsuCollection <a name="FleetSoftwareUpdateFsuCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection oci_fleet_software_update_fsu_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollection(Construct Scope, string Id, FleetSoftwareUpdateFsuCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig">FleetSoftwareUpdateFsuCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig">FleetSoftwareUpdateFsuCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery">PutFleetDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFleetDiscovery">ResetFleetDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFleetDiscovery` <a name="PutFleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery"></a>

```csharp
private void PutFleetDiscovery(FleetSoftwareUpdateFsuCollectionFleetDiscovery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putFleetDiscovery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts"></a>

```csharp
private void PutTimeouts(FleetSoftwareUpdateFsuCollectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFleetDiscovery` <a name="ResetFleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFleetDiscovery"></a>

```csharp
private void ResetFleetDiscovery()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCollection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

FleetSoftwareUpdateFsuCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FleetSoftwareUpdateFsuCollection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FleetSoftwareUpdateFsuCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FleetSoftwareUpdateFsuCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FleetSoftwareUpdateFsuCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.activeFsuCycle">ActiveFsuCycle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList">FleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscovery">FleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference">FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.targetCount">TargetCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference">FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscoveryInput">FleetDiscoveryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersionInput">SourceMajorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersion">SourceMajorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ActiveFsuCycle`<sup>Required</sup> <a name="ActiveFsuCycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.activeFsuCycle"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionActiveFsuCycleList ActiveFsuCycle { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList">FleetSoftwareUpdateFsuCollectionActiveFsuCycleList</a>

---

##### `FleetDiscovery`<sup>Required</sup> <a name="FleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscovery"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference FleetDiscovery { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference">FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetCount`<sup>Required</sup> <a name="TargetCount" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.targetCount"></a>

```csharp
public double TargetCount { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeouts"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference">FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FleetDiscoveryInput`<sup>Optional</sup> <a name="FleetDiscoveryInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.fleetDiscoveryInput"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionFleetDiscovery FleetDiscoveryInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceTypeInput"></a>

```csharp
public string ServiceTypeInput { get; }
```

- *Type:* string

---

##### `SourceMajorVersionInput`<sup>Optional</sup> <a name="SourceMajorVersionInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersionInput"></a>

```csharp
public string SourceMajorVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `SourceMajorVersion`<sup>Required</sup> <a name="SourceMajorVersion" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.sourceMajorVersion"></a>

```csharp
public string SourceMajorVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetSoftwareUpdateFsuCollectionActiveFsuCycle <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionActiveFsuCycle {

};
```


### FleetSoftwareUpdateFsuCollectionConfig <a name="FleetSoftwareUpdateFsuCollectionConfig" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ServiceType,
    string SourceMajorVersion,
    string Type,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    FleetSoftwareUpdateFsuCollectionFleetDiscovery FleetDiscovery = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    FleetSoftwareUpdateFsuCollectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.serviceType">ServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.sourceMajorVersion">SourceMajorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.fleetDiscovery">FleetDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | fleet_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#compartment_id FleetSoftwareUpdateFsuCollection#compartment_id}.

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.serviceType"></a>

```csharp
public string ServiceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#service_type FleetSoftwareUpdateFsuCollection#service_type}.

---

##### `SourceMajorVersion`<sup>Required</sup> <a name="SourceMajorVersion" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.sourceMajorVersion"></a>

```csharp
public string SourceMajorVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#source_major_version FleetSoftwareUpdateFsuCollection#source_major_version}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#defined_tags FleetSoftwareUpdateFsuCollection#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#display_name FleetSoftwareUpdateFsuCollection#display_name}.

---

##### `FleetDiscovery`<sup>Optional</sup> <a name="FleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.fleetDiscovery"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionFleetDiscovery FleetDiscovery { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

fleet_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fleet_discovery FleetSoftwareUpdateFsuCollection#fleet_discovery}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#freeform_tags FleetSoftwareUpdateFsuCollection#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#id FleetSoftwareUpdateFsuCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionConfig.property.timeouts"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts">FleetSoftwareUpdateFsuCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#timeouts FleetSoftwareUpdateFsuCollection#timeouts}

---

### FleetSoftwareUpdateFsuCollectionFleetDiscovery <a name="FleetSoftwareUpdateFsuCollectionFleetDiscovery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscovery {
    string Strategy,
    object Filters = null,
    string FsuDiscoveryId = null,
    string Query = null,
    string[] Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.strategy">Strategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#strategy FleetSoftwareUpdateFsuCollection#strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.filters">Filters</a></code> | <code>object</code> | filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.fsuDiscoveryId">FsuDiscoveryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fsu_discovery_id FleetSoftwareUpdateFsuCollection#fsu_discovery_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#query FleetSoftwareUpdateFsuCollection#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.targets">Targets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#targets FleetSoftwareUpdateFsuCollection#targets}. |

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.strategy"></a>

```csharp
public string Strategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#strategy FleetSoftwareUpdateFsuCollection#strategy}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.filters"></a>

```csharp
public object Filters { get; set; }
```

- *Type:* object

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#filters FleetSoftwareUpdateFsuCollection#filters}

---

##### `FsuDiscoveryId`<sup>Optional</sup> <a name="FsuDiscoveryId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.fsuDiscoveryId"></a>

```csharp
public string FsuDiscoveryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#fsu_discovery_id FleetSoftwareUpdateFsuCollection#fsu_discovery_id}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#query FleetSoftwareUpdateFsuCollection#query}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery.property.targets"></a>

```csharp
public string[] Targets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#targets FleetSoftwareUpdateFsuCollection#targets}.

---

### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters {
    string Type,
    string EntityType = null,
    string[] Identifiers = null,
    string Mode = null,
    string[] Names = null,
    string Operator = null,
    object Tags = null,
    string[] Versions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#entity_type FleetSoftwareUpdateFsuCollection#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.identifiers">Identifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#identifiers FleetSoftwareUpdateFsuCollection#identifiers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#mode FleetSoftwareUpdateFsuCollection#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.names">Names</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#names FleetSoftwareUpdateFsuCollection#names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#operator FleetSoftwareUpdateFsuCollection#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.versions">Versions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#versions FleetSoftwareUpdateFsuCollection#versions}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#type FleetSoftwareUpdateFsuCollection#type}.

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#entity_type FleetSoftwareUpdateFsuCollection#entity_type}.

---

##### `Identifiers`<sup>Optional</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#identifiers FleetSoftwareUpdateFsuCollection#identifiers}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#mode FleetSoftwareUpdateFsuCollection#mode}.

---

##### `Names`<sup>Optional</sup> <a name="Names" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.names"></a>

```csharp
public string[] Names { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#names FleetSoftwareUpdateFsuCollection#names}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#operator FleetSoftwareUpdateFsuCollection#operator}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#tags FleetSoftwareUpdateFsuCollection#tags}

---

##### `Versions`<sup>Optional</sup> <a name="Versions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFilters.property.versions"></a>

```csharp
public string[] Versions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#versions FleetSoftwareUpdateFsuCollection#versions}.

---

### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags {
    string Key,
    string Value,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#key FleetSoftwareUpdateFsuCollection#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#value FleetSoftwareUpdateFsuCollection#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#namespace FleetSoftwareUpdateFsuCollection#namespace}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#key FleetSoftwareUpdateFsuCollection#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#value FleetSoftwareUpdateFsuCollection#value}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTags.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#namespace FleetSoftwareUpdateFsuCollection#namespace}.

---

### FleetSoftwareUpdateFsuCollectionTimeouts <a name="FleetSoftwareUpdateFsuCollectionTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#create FleetSoftwareUpdateFsuCollection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#delete FleetSoftwareUpdateFsuCollection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#update FleetSoftwareUpdateFsuCollection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#create FleetSoftwareUpdateFsuCollection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#delete FleetSoftwareUpdateFsuCollection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_collection#update FleetSoftwareUpdateFsuCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetSoftwareUpdateFsuCollectionActiveFsuCycleList <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycleList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionActiveFsuCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get"></a>

```csharp
private FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference <a name="FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle">FleetSoftwareUpdateFsuCollectionActiveFsuCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycleOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionActiveFsuCycle InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionActiveFsuCycle">FleetSoftwareUpdateFsuCollectionActiveFsuCycle</a>

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get"></a>

```csharp
private FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetIdentifiers">ResetIdentifiers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetNames">ResetNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetVersions">ResetVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetEntityType` <a name="ResetEntityType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetEntityType"></a>

```csharp
private void ResetEntityType()
```

##### `ResetIdentifiers` <a name="ResetIdentifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetIdentifiers"></a>

```csharp
private void ResetIdentifiers()
```

##### `ResetMode` <a name="ResetMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetNames` <a name="ResetNames" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetNames"></a>

```csharp
private void ResetNames()
```

##### `ResetOperator` <a name="ResetOperator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVersions` <a name="ResetVersions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.resetVersions"></a>

```csharp
private void ResetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.namesInput">NamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versionsInput">VersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions">Versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tags"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList</a>

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NamesInput`<sup>Optional</sup> <a name="NamesInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.namesInput"></a>

```csharp
public string[] NamesInput { get; }
```

- *Type:* string[]

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionsInput`<sup>Optional</sup> <a name="VersionsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versionsInput"></a>

```csharp
public string[] VersionsInput { get; }
```

- *Type:* string[]

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Names`<sup>Required</sup> <a name="Names" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.versions"></a>

```csharp
public string[] Versions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get"></a>

```csharp
private FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference <a name="FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFsuDiscoveryId">ResetFsuDiscoveryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters"></a>

```csharp
private void PutFilters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.putFilters.parameter.value"></a>

- *Type:* object

---

##### `ResetFilters` <a name="ResetFilters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetFsuDiscoveryId` <a name="ResetFsuDiscoveryId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetFsuDiscoveryId"></a>

```csharp
private void ResetFsuDiscoveryId()
```

##### `ResetQuery` <a name="ResetQuery" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetTargets` <a name="ResetTargets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filtersInput">FiltersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryIdInput">FsuDiscoveryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategyInput">StrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targetsInput">TargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId">FsuDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filters"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList Filters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList">FleetSoftwareUpdateFsuCollectionFleetDiscoveryFiltersList</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.filtersInput"></a>

```csharp
public object FiltersInput { get; }
```

- *Type:* object

---

##### `FsuDiscoveryIdInput`<sup>Optional</sup> <a name="FsuDiscoveryIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryIdInput"></a>

```csharp
public string FsuDiscoveryIdInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategyInput"></a>

```csharp
public string StrategyInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targetsInput"></a>

```csharp
public string[] TargetsInput { get; }
```

- *Type:* string[]

---

##### `FsuDiscoveryId`<sup>Required</sup> <a name="FsuDiscoveryId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.fsuDiscoveryId"></a>

```csharp
public string FsuDiscoveryId { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscoveryOutputReference.property.internalValue"></a>

```csharp
public FleetSoftwareUpdateFsuCollectionFleetDiscovery InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionFleetDiscovery">FleetSoftwareUpdateFsuCollectionFleetDiscovery</a>

---


### FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference <a name="FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCollection.FleetSoftwareUpdateFsuCollectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



