# `coreVirtualNetwork` Submodule <a name="`coreVirtualNetwork` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualNetwork <a name="CoreVirtualNetwork" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network oci_core_virtual_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualNetwork(Construct Scope, string Id, CoreVirtualNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig">CoreVirtualNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig">CoreVirtualNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails">PutByoipv6CidrDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails">ResetByoipv6CidrDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel">ResetDnsLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks">ResetIpv6PrivateCidrBlocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled">ResetIsIpv6Enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled">ResetIsOracleGuaAllocationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutByoipv6CidrDetails` <a name="PutByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails"></a>

```csharp
private void PutByoipv6CidrDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putByoipv6CidrDetails.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(CoreVirtualNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

---

##### `ResetByoipv6CidrDetails` <a name="ResetByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetByoipv6CidrDetails"></a>

```csharp
private void ResetByoipv6CidrDetails()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetCidrBlocks"></a>

```csharp
private void ResetCidrBlocks()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDnsLabel` <a name="ResetDnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetDnsLabel"></a>

```csharp
private void ResetDnsLabel()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6PrivateCidrBlocks` <a name="ResetIpv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIpv6PrivateCidrBlocks"></a>

```csharp
private void ResetIpv6PrivateCidrBlocks()
```

##### `ResetIsIpv6Enabled` <a name="ResetIsIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsIpv6Enabled"></a>

```csharp
private void ResetIsIpv6Enabled()
```

##### `ResetIsOracleGuaAllocationEnabled` <a name="ResetIsOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetIsOracleGuaAllocationEnabled"></a>

```csharp
private void ResetIsOracleGuaAllocationEnabled()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetSecurityAttributes"></a>

```csharp
private void ResetSecurityAttributes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

CoreVirtualNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CoreVirtualNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVirtualNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVirtualNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks">Byoipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails">Byoipv6CidrDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId">DefaultDhcpOptionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId">DefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId">DefaultSecurityListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName">VcnDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput">Byoipv6CidrDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput">DnsLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput">Ipv6PrivateCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput">IsIpv6EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput">IsOracleGuaAllocationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel">DnsLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks">Ipv6PrivateCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled">IsOracleGuaAllocationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Byoipv6CidrBlocks`<sup>Required</sup> <a name="Byoipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrBlocks"></a>

```csharp
public string[] Byoipv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `Byoipv6CidrDetails`<sup>Required</sup> <a name="Byoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetails"></a>

```csharp
public CoreVirtualNetworkByoipv6CidrDetailsList Byoipv6CidrDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList">CoreVirtualNetworkByoipv6CidrDetailsList</a>

---

##### `DefaultDhcpOptionsId`<sup>Required</sup> <a name="DefaultDhcpOptionsId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultDhcpOptionsId"></a>

```csharp
public string DefaultDhcpOptionsId { get; }
```

- *Type:* string

---

##### `DefaultRouteTableId`<sup>Required</sup> <a name="DefaultRouteTableId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultRouteTableId"></a>

```csharp
public string DefaultRouteTableId { get; }
```

- *Type:* string

---

##### `DefaultSecurityListId`<sup>Required</sup> <a name="DefaultSecurityListId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.defaultSecurityListId"></a>

```csharp
public string DefaultSecurityListId { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6CidrBlocks"></a>

```csharp
public string[] Ipv6CidrBlocks { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeouts"></a>

```csharp
public CoreVirtualNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference">CoreVirtualNetworkTimeoutsOutputReference</a>

---

##### `VcnDomainName`<sup>Required</sup> <a name="VcnDomainName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.vcnDomainName"></a>

```csharp
public string VcnDomainName { get; }
```

- *Type:* string

---

##### `Byoipv6CidrDetailsInput`<sup>Optional</sup> <a name="Byoipv6CidrDetailsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.byoipv6CidrDetailsInput"></a>

```csharp
public object Byoipv6CidrDetailsInput { get; }
```

- *Type:* object

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocksInput"></a>

```csharp
public string[] CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DnsLabelInput`<sup>Optional</sup> <a name="DnsLabelInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabelInput"></a>

```csharp
public string DnsLabelInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6PrivateCidrBlocksInput`<sup>Optional</sup> <a name="Ipv6PrivateCidrBlocksInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocksInput"></a>

```csharp
public string[] Ipv6PrivateCidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `IsIpv6EnabledInput`<sup>Optional</sup> <a name="IsIpv6EnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6EnabledInput"></a>

```csharp
public object IsIpv6EnabledInput { get; }
```

- *Type:* object

---

##### `IsOracleGuaAllocationEnabledInput`<sup>Optional</sup> <a name="IsOracleGuaAllocationEnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabledInput"></a>

```csharp
public object IsOracleGuaAllocationEnabledInput { get; }
```

- *Type:* object

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DnsLabel`<sup>Required</sup> <a name="DnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.dnsLabel"></a>

```csharp
public string DnsLabel { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6PrivateCidrBlocks`<sup>Required</sup> <a name="Ipv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.ipv6PrivateCidrBlocks"></a>

```csharp
public string[] Ipv6PrivateCidrBlocks { get; }
```

- *Type:* string[]

---

##### `IsIpv6Enabled`<sup>Required</sup> <a name="IsIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isIpv6Enabled"></a>

```csharp
public object IsIpv6Enabled { get; }
```

- *Type:* object

---

##### `IsOracleGuaAllocationEnabled`<sup>Required</sup> <a name="IsOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.isOracleGuaAllocationEnabled"></a>

```csharp
public object IsOracleGuaAllocationEnabled { get; }
```

- *Type:* object

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualNetworkByoipv6CidrDetails <a name="CoreVirtualNetworkByoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualNetworkByoipv6CidrDetails {
    string Byoipv6RangeId,
    string Ipv6CidrBlock
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId">Byoipv6RangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}. |

---

##### `Byoipv6RangeId`<sup>Required</sup> <a name="Byoipv6RangeId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.byoipv6RangeId"></a>

```csharp
public string Byoipv6RangeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6range_id CoreVirtualNetwork#byoipv6range_id}.

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetails.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6cidr_block CoreVirtualNetwork#ipv6cidr_block}.

---

### CoreVirtualNetworkConfig <a name="CoreVirtualNetworkConfig" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualNetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Byoipv6CidrDetails = null,
    string CidrBlock = null,
    string[] CidrBlocks = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    string DnsLabel = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string[] Ipv6PrivateCidrBlocks = null,
    object IsIpv6Enabled = null,
    object IsOracleGuaAllocationEnabled = null,
    System.Collections.Generic.IDictionary<string, string> SecurityAttributes = null,
    CoreVirtualNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails">Byoipv6CidrDetails</a></code> | <code>object</code> | byoipv6cidr_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel">DnsLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks">Ipv6PrivateCidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled">IsIpv6Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled">IsOracleGuaAllocationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#compartment_id CoreVirtualNetwork#compartment_id}.

---

##### `Byoipv6CidrDetails`<sup>Optional</sup> <a name="Byoipv6CidrDetails" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.byoipv6CidrDetails"></a>

```csharp
public object Byoipv6CidrDetails { get; set; }
```

- *Type:* object

byoipv6cidr_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#byoipv6cidr_details CoreVirtualNetwork#byoipv6cidr_details}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_block CoreVirtualNetwork#cidr_block}.

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#cidr_blocks CoreVirtualNetwork#cidr_blocks}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#defined_tags CoreVirtualNetwork#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#display_name CoreVirtualNetwork#display_name}.

---

##### `DnsLabel`<sup>Optional</sup> <a name="DnsLabel" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.dnsLabel"></a>

```csharp
public string DnsLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#dns_label CoreVirtualNetwork#dns_label}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#freeform_tags CoreVirtualNetwork#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#id CoreVirtualNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6PrivateCidrBlocks`<sup>Optional</sup> <a name="Ipv6PrivateCidrBlocks" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.ipv6PrivateCidrBlocks"></a>

```csharp
public string[] Ipv6PrivateCidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#ipv6private_cidr_blocks CoreVirtualNetwork#ipv6private_cidr_blocks}.

---

##### `IsIpv6Enabled`<sup>Optional</sup> <a name="IsIpv6Enabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isIpv6Enabled"></a>

```csharp
public object IsIpv6Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_ipv6enabled CoreVirtualNetwork#is_ipv6enabled}.

---

##### `IsOracleGuaAllocationEnabled`<sup>Optional</sup> <a name="IsOracleGuaAllocationEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.isOracleGuaAllocationEnabled"></a>

```csharp
public object IsOracleGuaAllocationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#is_oracle_gua_allocation_enabled CoreVirtualNetwork#is_oracle_gua_allocation_enabled}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#security_attributes CoreVirtualNetwork#security_attributes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkConfig.property.timeouts"></a>

```csharp
public CoreVirtualNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts">CoreVirtualNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#timeouts CoreVirtualNetwork#timeouts}

---

### CoreVirtualNetworkTimeouts <a name="CoreVirtualNetworkTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#create CoreVirtualNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#delete CoreVirtualNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_network#update CoreVirtualNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualNetworkByoipv6CidrDetailsList <a name="CoreVirtualNetworkByoipv6CidrDetailsList" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualNetworkByoipv6CidrDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get"></a>

```csharp
private CoreVirtualNetworkByoipv6CidrDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVirtualNetworkByoipv6CidrDetailsOutputReference <a name="CoreVirtualNetworkByoipv6CidrDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualNetworkByoipv6CidrDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput">Byoipv6RangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId">Byoipv6RangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Byoipv6RangeIdInput`<sup>Optional</sup> <a name="Byoipv6RangeIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeIdInput"></a>

```csharp
public string Byoipv6RangeIdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `Byoipv6RangeId`<sup>Required</sup> <a name="Byoipv6RangeId" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.byoipv6RangeId"></a>

```csharp
public string Byoipv6RangeId { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkByoipv6CidrDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CoreVirtualNetworkTimeoutsOutputReference <a name="CoreVirtualNetworkTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new CoreVirtualNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreVirtualNetwork.CoreVirtualNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



