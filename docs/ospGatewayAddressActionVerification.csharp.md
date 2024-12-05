# `ospGatewayAddressActionVerification` Submodule <a name="`ospGatewayAddressActionVerification` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewayAddressActionVerification <a name="OspGatewayAddressActionVerification" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification oci_osp_gateway_address_action_verification}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewayAddressActionVerification(Construct Scope, string Id, OspGatewayAddressActionVerificationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig">OspGatewayAddressActionVerificationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig">OspGatewayAddressActionVerificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey">ResetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass">ResetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName">ResetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber">ResetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1">ResetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2">ResetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3">ResetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4">ResetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription">ResetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode">ResetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription">ResetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName">ResetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber">ResetStreetNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts"></a>

```csharp
private void PutTimeouts(OspGatewayAddressActionVerificationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---

##### `ResetAddressKey` <a name="ResetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey"></a>

```csharp
private void ResetAddressKey()
```

##### `ResetCity` <a name="ResetCity" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName"></a>

```csharp
private void ResetCompanyName()
```

##### `ResetContributorClass` <a name="ResetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass"></a>

```csharp
private void ResetContributorClass()
```

##### `ResetCountry` <a name="ResetCountry" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetDepartmentName` <a name="ResetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName"></a>

```csharp
private void ResetDepartmentName()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternalNumber` <a name="ResetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber"></a>

```csharp
private void ResetInternalNumber()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle"></a>

```csharp
private void ResetJobTitle()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetLine1` <a name="ResetLine1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1"></a>

```csharp
private void ResetLine1()
```

##### `ResetLine2` <a name="ResetLine2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2"></a>

```csharp
private void ResetLine2()
```

##### `ResetLine3` <a name="ResetLine3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3"></a>

```csharp
private void ResetLine3()
```

##### `ResetLine4` <a name="ResetLine4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4"></a>

```csharp
private void ResetLine4()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName"></a>

```csharp
private void ResetMiddleName()
```

##### `ResetMunicipalInscription` <a name="ResetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription"></a>

```csharp
private void ResetMunicipalInscription()
```

##### `ResetPhoneCountryCode` <a name="ResetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode"></a>

```csharp
private void ResetPhoneCountryCode()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStateInscription` <a name="ResetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription"></a>

```csharp
private void ResetStateInscription()
```

##### `ResetStreetName` <a name="ResetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName"></a>

```csharp
private void ResetStreetName()
```

##### `ResetStreetNumber` <a name="ResetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber"></a>

```csharp
private void ResetStreetNumber()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewayAddressActionVerification.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewayAddressActionVerification.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewayAddressActionVerification.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OspGatewayAddressActionVerification.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OspGatewayAddressActionVerification to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OspGatewayAddressActionVerification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewayAddressActionVerification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address">Address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality">Quality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode">VerificationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput">AddressKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput">CompanyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput">ContributorClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput">DepartmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput">InternalNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput">JobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input">Line1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input">Line2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input">Line3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input">Line4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput">MiddleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput">MunicipalInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput">OspHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput">PhoneCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput">StateInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput">StreetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput">StreetNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey">AddressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass">ContributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName">DepartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber">InternalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle">JobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1">Line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2">Line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3">Line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4">Line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription">MunicipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription">StateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName">StreetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber">StreetNumber</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address"></a>

```csharp
public OspGatewayAddressActionVerificationAddressList Address { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a>

---

##### `Quality`<sup>Required</sup> <a name="Quality" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality"></a>

```csharp
public string Quality { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts"></a>

```csharp
public OspGatewayAddressActionVerificationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a>

---

##### `VerificationCode`<sup>Required</sup> <a name="VerificationCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode"></a>

```csharp
public string VerificationCode { get; }
```

- *Type:* string

---

##### `AddressKeyInput`<sup>Optional</sup> <a name="AddressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput"></a>

```csharp
public string AddressKeyInput { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput"></a>

```csharp
public string CompanyNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ContributorClassInput`<sup>Optional</sup> <a name="ContributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput"></a>

```csharp
public string ContributorClassInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `DepartmentNameInput`<sup>Optional</sup> <a name="DepartmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput"></a>

```csharp
public string DepartmentNameInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternalNumberInput`<sup>Optional</sup> <a name="InternalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput"></a>

```csharp
public string InternalNumberInput { get; }
```

- *Type:* string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput"></a>

```csharp
public string JobTitleInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `Line1Input`<sup>Optional</sup> <a name="Line1Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input"></a>

```csharp
public string Line1Input { get; }
```

- *Type:* string

---

##### `Line2Input`<sup>Optional</sup> <a name="Line2Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input"></a>

```csharp
public string Line2Input { get; }
```

- *Type:* string

---

##### `Line3Input`<sup>Optional</sup> <a name="Line3Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input"></a>

```csharp
public string Line3Input { get; }
```

- *Type:* string

---

##### `Line4Input`<sup>Optional</sup> <a name="Line4Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input"></a>

```csharp
public string Line4Input { get; }
```

- *Type:* string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput"></a>

```csharp
public string MiddleNameInput { get; }
```

- *Type:* string

---

##### `MunicipalInscriptionInput`<sup>Optional</sup> <a name="MunicipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput"></a>

```csharp
public string MunicipalInscriptionInput { get; }
```

- *Type:* string

---

##### `OspHomeRegionInput`<sup>Optional</sup> <a name="OspHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput"></a>

```csharp
public string OspHomeRegionInput { get; }
```

- *Type:* string

---

##### `PhoneCountryCodeInput`<sup>Optional</sup> <a name="PhoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput"></a>

```csharp
public string PhoneCountryCodeInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StateInscriptionInput`<sup>Optional</sup> <a name="StateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput"></a>

```csharp
public string StateInscriptionInput { get; }
```

- *Type:* string

---

##### `StreetNameInput`<sup>Optional</sup> <a name="StreetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput"></a>

```csharp
public string StreetNameInput { get; }
```

- *Type:* string

---

##### `StreetNumberInput`<sup>Optional</sup> <a name="StreetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput"></a>

```csharp
public string StreetNumberInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey"></a>

```csharp
public string AddressKey { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass"></a>

```csharp
public string ContributorClass { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName"></a>

```csharp
public string DepartmentName { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber"></a>

```csharp
public string InternalNumber { get; }
```

- *Type:* string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle"></a>

```csharp
public string JobTitle { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1"></a>

```csharp
public string Line1 { get; }
```

- *Type:* string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2"></a>

```csharp
public string Line2 { get; }
```

- *Type:* string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3"></a>

```csharp
public string Line3 { get; }
```

- *Type:* string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4"></a>

```csharp
public string Line4 { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription"></a>

```csharp
public string MunicipalInscription { get; }
```

- *Type:* string

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; }
```

- *Type:* string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode"></a>

```csharp
public string PhoneCountryCode { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription"></a>

```csharp
public string StateInscription { get; }
```

- *Type:* string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName"></a>

```csharp
public string StreetName { get; }
```

- *Type:* string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber"></a>

```csharp
public string StreetNumber { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewayAddressActionVerificationAddress <a name="OspGatewayAddressActionVerificationAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewayAddressActionVerificationAddress {

};
```


### OspGatewayAddressActionVerificationConfig <a name="OspGatewayAddressActionVerificationConfig" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewayAddressActionVerificationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string OspHomeRegion,
    string AddressKey = null,
    string City = null,
    string CompanyName = null,
    string ContributorClass = null,
    string Country = null,
    string County = null,
    string DepartmentName = null,
    string EmailAddress = null,
    string FirstName = null,
    string Id = null,
    string InternalNumber = null,
    string JobTitle = null,
    string LastName = null,
    string Line1 = null,
    string Line2 = null,
    string Line3 = null,
    string Line4 = null,
    string MiddleName = null,
    string MunicipalInscription = null,
    string PhoneCountryCode = null,
    string PhoneNumber = null,
    string PostalCode = null,
    string Province = null,
    string State = null,
    string StateInscription = null,
    string StreetName = null,
    string StreetNumber = null,
    OspGatewayAddressActionVerificationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion">OspHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey">AddressKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName">CompanyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass">ContributorClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName">DepartmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber">InternalNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle">JobTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1">Line1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2">Line2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3">Line3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4">Line4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName">MiddleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription">MunicipalInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription">StateInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName">StreetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber">StreetNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}.

---

##### `OspHomeRegion`<sup>Required</sup> <a name="OspHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion"></a>

```csharp
public string OspHomeRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}.

---

##### `AddressKey`<sup>Optional</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey"></a>

```csharp
public string AddressKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}.

---

##### `City`<sup>Optional</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}.

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName"></a>

```csharp
public string CompanyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}.

---

##### `ContributorClass`<sup>Optional</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass"></a>

```csharp
public string ContributorClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}.

---

##### `DepartmentName`<sup>Optional</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName"></a>

```csharp
public string DepartmentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalNumber`<sup>Optional</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber"></a>

```csharp
public string InternalNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}.

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle"></a>

```csharp
public string JobTitle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}.

---

##### `Line1`<sup>Optional</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1"></a>

```csharp
public string Line1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}.

---

##### `Line2`<sup>Optional</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2"></a>

```csharp
public string Line2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}.

---

##### `Line3`<sup>Optional</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3"></a>

```csharp
public string Line3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}.

---

##### `Line4`<sup>Optional</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4"></a>

```csharp
public string Line4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}.

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName"></a>

```csharp
public string MiddleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}.

---

##### `MunicipalInscription`<sup>Optional</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription"></a>

```csharp
public string MunicipalInscription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}.

---

##### `PhoneCountryCode`<sup>Optional</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode"></a>

```csharp
public string PhoneCountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}.

---

##### `StateInscription`<sup>Optional</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription"></a>

```csharp
public string StateInscription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}.

---

##### `StreetName`<sup>Optional</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName"></a>

```csharp
public string StreetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}.

---

##### `StreetNumber`<sup>Optional</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber"></a>

```csharp
public string StreetNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts"></a>

```csharp
public OspGatewayAddressActionVerificationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#timeouts OspGatewayAddressActionVerification#timeouts}

---

### OspGatewayAddressActionVerificationTimeouts <a name="OspGatewayAddressActionVerificationTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewayAddressActionVerificationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewayAddressActionVerificationAddressList <a name="OspGatewayAddressActionVerificationAddressList" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewayAddressActionVerificationAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get"></a>

```csharp
private OspGatewayAddressActionVerificationAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OspGatewayAddressActionVerificationAddressOutputReference <a name="OspGatewayAddressActionVerificationAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewayAddressActionVerificationAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey">AddressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass">ContributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName">DepartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber">InternalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle">JobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1">Line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2">Line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3">Line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4">Line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription">MunicipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode">PhoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription">StateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName">StreetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber">StreetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressKey`<sup>Required</sup> <a name="AddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey"></a>

```csharp
public string AddressKey { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `ContributorClass`<sup>Required</sup> <a name="ContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass"></a>

```csharp
public string ContributorClass { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `DepartmentName`<sup>Required</sup> <a name="DepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName"></a>

```csharp
public string DepartmentName { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `InternalNumber`<sup>Required</sup> <a name="InternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber"></a>

```csharp
public string InternalNumber { get; }
```

- *Type:* string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle"></a>

```csharp
public string JobTitle { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Line1`<sup>Required</sup> <a name="Line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1"></a>

```csharp
public string Line1 { get; }
```

- *Type:* string

---

##### `Line2`<sup>Required</sup> <a name="Line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2"></a>

```csharp
public string Line2 { get; }
```

- *Type:* string

---

##### `Line3`<sup>Required</sup> <a name="Line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3"></a>

```csharp
public string Line3 { get; }
```

- *Type:* string

---

##### `Line4`<sup>Required</sup> <a name="Line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4"></a>

```csharp
public string Line4 { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MunicipalInscription`<sup>Required</sup> <a name="MunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription"></a>

```csharp
public string MunicipalInscription { get; }
```

- *Type:* string

---

##### `PhoneCountryCode`<sup>Required</sup> <a name="PhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode"></a>

```csharp
public string PhoneCountryCode { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateInscription`<sup>Required</sup> <a name="StateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription"></a>

```csharp
public string StateInscription { get; }
```

- *Type:* string

---

##### `StreetName`<sup>Required</sup> <a name="StreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName"></a>

```csharp
public string StreetName { get; }
```

- *Type:* string

---

##### `StreetNumber`<sup>Required</sup> <a name="StreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber"></a>

```csharp
public string StreetNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue"></a>

```csharp
public OspGatewayAddressActionVerificationAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a>

---


### OspGatewayAddressActionVerificationTimeoutsOutputReference <a name="OspGatewayAddressActionVerificationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OspGatewayAddressActionVerificationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



