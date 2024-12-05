# `identityDomainsSelfRegistrationProfile` Submodule <a name="`identityDomainsSelfRegistrationProfile` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsSelfRegistrationProfile <a name="IdentityDomainsSelfRegistrationProfile" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile oci_identity_domains_self_registration_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfile(Construct Scope, string Id, IdentityDomainsSelfRegistrationProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig">IdentityDomainsSelfRegistrationProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig">IdentityDomainsSelfRegistrationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText">PutAfterSubmitText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText">PutConsentText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups">PutDefaultGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName">PutDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate">PutEmailTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText">PutFooterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText">PutHeaderText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes">PutUserAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText">ResetAfterSubmitText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains">ResetAllowedEmailDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText">ResetConsentText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups">ResetDefaultGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains">ResetDisallowedEmailDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo">ResetFooterLogo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo">ResetHeaderLogo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes">ResetUserAttributes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAfterSubmitText` <a name="PutAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText"></a>

```csharp
private void PutAfterSubmitText(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putAfterSubmitText.parameter.value"></a>

- *Type:* object

---

##### `PutConsentText` <a name="PutConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText"></a>

```csharp
private void PutConsentText(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putConsentText.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultGroups` <a name="PutDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups"></a>

```csharp
private void PutDefaultGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDefaultGroups.parameter.value"></a>

- *Type:* object

---

##### `PutDisplayName` <a name="PutDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName"></a>

```csharp
private void PutDisplayName(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putDisplayName.parameter.value"></a>

- *Type:* object

---

##### `PutEmailTemplate` <a name="PutEmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate"></a>

```csharp
private void PutEmailTemplate(IdentityDomainsSelfRegistrationProfileEmailTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putEmailTemplate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---

##### `PutFooterText` <a name="PutFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText"></a>

```csharp
private void PutFooterText(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putFooterText.parameter.value"></a>

- *Type:* object

---

##### `PutHeaderText` <a name="PutHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText"></a>

```csharp
private void PutHeaderText(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putHeaderText.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsSelfRegistrationProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

---

##### `PutUserAttributes` <a name="PutUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes"></a>

```csharp
private void PutUserAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.putUserAttributes.parameter.value"></a>

- *Type:* object

---

##### `ResetActive` <a name="ResetActive" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAfterSubmitText` <a name="ResetAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAfterSubmitText"></a>

```csharp
private void ResetAfterSubmitText()
```

##### `ResetAllowedEmailDomains` <a name="ResetAllowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAllowedEmailDomains"></a>

```csharp
private void ResetAllowedEmailDomains()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetConsentText` <a name="ResetConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetConsentText"></a>

```csharp
private void ResetConsentText()
```

##### `ResetDefaultGroups` <a name="ResetDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDefaultGroups"></a>

```csharp
private void ResetDefaultGroups()
```

##### `ResetDisallowedEmailDomains` <a name="ResetDisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetDisallowedEmailDomains"></a>

```csharp
private void ResetDisallowedEmailDomains()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetFooterLogo` <a name="ResetFooterLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterLogo"></a>

```csharp
private void ResetFooterLogo()
```

##### `ResetFooterText` <a name="ResetFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetFooterText"></a>

```csharp
private void ResetFooterText()
```

##### `ResetHeaderLogo` <a name="ResetHeaderLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderLogo"></a>

```csharp
private void ResetHeaderLogo()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetHeaderText"></a>

```csharp
private void ResetHeaderText()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserAttributes` <a name="ResetUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.resetUserAttributes"></a>

```csharp
private void ResetUserAttributes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSelfRegistrationProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSelfRegistrationProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSelfRegistrationProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsSelfRegistrationProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsSelfRegistrationProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsSelfRegistrationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsSelfRegistrationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText">AfterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText">ConsentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups">DefaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName">DisplayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate">EmailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText">FooterText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText">HeaderText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes">UserAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput">ActivationEmailRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput">AfterSubmitTextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput">AllowedEmailDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput">ConsentTextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput">ConsentTextPresentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput">DefaultGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput">DisallowedEmailDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput">EmailTemplateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput">FooterLogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput">FooterTextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput">HeaderLogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput">HeaderTextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput">NumberOfDaysRedirectUrlIsValidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput">ShowOnLoginPageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput">UserAttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired">ActivationEmailRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent">ConsentTextPresent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains">DisallowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo">FooterLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo">HeaderLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid">NumberOfDaysRedirectUrlIsValid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage">ShowOnLoginPage</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AfterSubmitText`<sup>Required</sup> <a name="AfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitText"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileAfterSubmitTextList AfterSubmitText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList">IdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConsentText`<sup>Required</sup> <a name="ConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentText"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileConsentTextList ConsentText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList">IdentityDomainsSelfRegistrationProfileConsentTextList</a>

---

##### `DefaultGroups`<sup>Required</sup> <a name="DefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroups"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileDefaultGroupsList DefaultGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList">IdentityDomainsSelfRegistrationProfileDefaultGroupsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayName"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileDisplayNameList DisplayName { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList">IdentityDomainsSelfRegistrationProfileDisplayNameList</a>

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `EmailTemplate`<sup>Required</sup> <a name="EmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplate"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference EmailTemplate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference">IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference</a>

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerText"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileFooterTextList FooterText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList">IdentityDomainsSelfRegistrationProfileFooterTextList</a>

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerText"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileHeaderTextList HeaderText { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList">IdentityDomainsSelfRegistrationProfileHeaderTextList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList">IdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.meta"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList">IdentityDomainsSelfRegistrationProfileMetaList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tags"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList">IdentityDomainsSelfRegistrationProfileTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeouts"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference">IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference</a>

---

##### `UserAttributes`<sup>Required</sup> <a name="UserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributes"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileUserAttributesList UserAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList">IdentityDomainsSelfRegistrationProfileUserAttributesList</a>

---

##### `ActivationEmailRequiredInput`<sup>Optional</sup> <a name="ActivationEmailRequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequiredInput"></a>

```csharp
public object ActivationEmailRequiredInput { get; }
```

- *Type:* object

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `AfterSubmitTextInput`<sup>Optional</sup> <a name="AfterSubmitTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.afterSubmitTextInput"></a>

```csharp
public object AfterSubmitTextInput { get; }
```

- *Type:* object

---

##### `AllowedEmailDomainsInput`<sup>Optional</sup> <a name="AllowedEmailDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomainsInput"></a>

```csharp
public string[] AllowedEmailDomainsInput { get; }
```

- *Type:* string[]

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `ConsentTextInput`<sup>Optional</sup> <a name="ConsentTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextInput"></a>

```csharp
public object ConsentTextInput { get; }
```

- *Type:* object

---

##### `ConsentTextPresentInput`<sup>Optional</sup> <a name="ConsentTextPresentInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresentInput"></a>

```csharp
public object ConsentTextPresentInput { get; }
```

- *Type:* object

---

##### `DefaultGroupsInput`<sup>Optional</sup> <a name="DefaultGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.defaultGroupsInput"></a>

```csharp
public object DefaultGroupsInput { get; }
```

- *Type:* object

---

##### `DisallowedEmailDomainsInput`<sup>Optional</sup> <a name="DisallowedEmailDomainsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomainsInput"></a>

```csharp
public string[] DisallowedEmailDomainsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.displayNameInput"></a>

```csharp
public object DisplayNameInput { get; }
```

- *Type:* object

---

##### `EmailTemplateInput`<sup>Optional</sup> <a name="EmailTemplateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.emailTemplateInput"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileEmailTemplate EmailTemplateInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `FooterLogoInput`<sup>Optional</sup> <a name="FooterLogoInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogoInput"></a>

```csharp
public string FooterLogoInput { get; }
```

- *Type:* string

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerTextInput"></a>

```csharp
public object FooterTextInput { get; }
```

- *Type:* object

---

##### `HeaderLogoInput`<sup>Optional</sup> <a name="HeaderLogoInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogoInput"></a>

```csharp
public string HeaderLogoInput { get; }
```

- *Type:* string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerTextInput"></a>

```csharp
public object HeaderTextInput { get; }
```

- *Type:* object

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberOfDaysRedirectUrlIsValidInput`<sup>Optional</sup> <a name="NumberOfDaysRedirectUrlIsValidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValidInput"></a>

```csharp
public double NumberOfDaysRedirectUrlIsValidInput { get; }
```

- *Type:* double

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `ShowOnLoginPageInput`<sup>Optional</sup> <a name="ShowOnLoginPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPageInput"></a>

```csharp
public object ShowOnLoginPageInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserAttributesInput`<sup>Optional</sup> <a name="UserAttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.userAttributesInput"></a>

```csharp
public object UserAttributesInput { get; }
```

- *Type:* object

---

##### `ActivationEmailRequired`<sup>Required</sup> <a name="ActivationEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.activationEmailRequired"></a>

```csharp
public object ActivationEmailRequired { get; }
```

- *Type:* object

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `AllowedEmailDomains`<sup>Required</sup> <a name="AllowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains"></a>

```csharp
public string[] AllowedEmailDomains { get; }
```

- *Type:* string[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `ConsentTextPresent`<sup>Required</sup> <a name="ConsentTextPresent" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.consentTextPresent"></a>

```csharp
public object ConsentTextPresent { get; }
```

- *Type:* object

---

##### `DisallowedEmailDomains`<sup>Required</sup> <a name="DisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains"></a>

```csharp
public string[] DisallowedEmailDomains { get; }
```

- *Type:* string[]

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `FooterLogo`<sup>Required</sup> <a name="FooterLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.footerLogo"></a>

```csharp
public string FooterLogo { get; }
```

- *Type:* string

---

##### `HeaderLogo`<sup>Required</sup> <a name="HeaderLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.headerLogo"></a>

```csharp
public string HeaderLogo { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="NumberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid"></a>

```csharp
public double NumberOfDaysRedirectUrlIsValid { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `ShowOnLoginPage`<sup>Required</sup> <a name="ShowOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.showOnLoginPage"></a>

```csharp
public object ShowOnLoginPage { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitText <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileAfterSubmitText {
    string Locale,
    string Value,
    object Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default">Default</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitText.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileConfig <a name="IdentityDomainsSelfRegistrationProfileConfig" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ActivationEmailRequired,
    object ConsentTextPresent,
    object DisplayName,
    IdentityDomainsSelfRegistrationProfileEmailTemplate EmailTemplate,
    string IdcsEndpoint,
    string Name,
    double NumberOfDaysRedirectUrlIsValid,
    string RedirectUrl,
    string[] Schemas,
    object ShowOnLoginPage,
    object Active = null,
    object AfterSubmitText = null,
    string[] AllowedEmailDomains = null,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    object ConsentText = null,
    object DefaultGroups = null,
    string[] DisallowedEmailDomains = null,
    string ExternalId = null,
    string FooterLogo = null,
    object FooterText = null,
    string HeaderLogo = null,
    object HeaderText = null,
    string Ocid = null,
    string ResourceTypeSchemaVersion = null,
    object Tags = null,
    IdentityDomainsSelfRegistrationProfileTimeouts Timeouts = null,
    object UserAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired">ActivationEmailRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent">ConsentTextPresent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName">DisplayName</a></code> | <code>object</code> | display_name block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate">EmailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | email_template block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid">NumberOfDaysRedirectUrlIsValid</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage">ShowOnLoginPage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active">Active</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText">AfterSubmitText</a></code> | <code>object</code> | after_submit_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText">ConsentText</a></code> | <code>object</code> | consent_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups">DefaultGroups</a></code> | <code>object</code> | default_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains">DisallowedEmailDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo">FooterLogo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText">FooterText</a></code> | <code>object</code> | footer_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo">HeaderLogo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText">HeaderText</a></code> | <code>object</code> | header_text block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes">UserAttributes</a></code> | <code>object</code> | user_attributes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActivationEmailRequired`<sup>Required</sup> <a name="ActivationEmailRequired" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.activationEmailRequired"></a>

```csharp
public object ActivationEmailRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#activation_email_required IdentityDomainsSelfRegistrationProfile#activation_email_required}.

---

##### `ConsentTextPresent`<sup>Required</sup> <a name="ConsentTextPresent" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentTextPresent"></a>

```csharp
public object ConsentTextPresent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text_present IdentityDomainsSelfRegistrationProfile#consent_text_present}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.displayName"></a>

```csharp
public object DisplayName { get; set; }
```

- *Type:* object

display_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#display_name IdentityDomainsSelfRegistrationProfile#display_name}

---

##### `EmailTemplate`<sup>Required</sup> <a name="EmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.emailTemplate"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileEmailTemplate EmailTemplate { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#email_template IdentityDomainsSelfRegistrationProfile#email_template}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#idcs_endpoint IdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#name IdentityDomainsSelfRegistrationProfile#name}.

---

##### `NumberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="NumberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.numberOfDaysRedirectUrlIsValid"></a>

```csharp
public double NumberOfDaysRedirectUrlIsValid { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#number_of_days_redirect_url_is_valid IdentityDomainsSelfRegistrationProfile#number_of_days_redirect_url_is_valid}.

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#redirect_url IdentityDomainsSelfRegistrationProfile#redirect_url}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#schemas IdentityDomainsSelfRegistrationProfile#schemas}.

---

##### `ShowOnLoginPage`<sup>Required</sup> <a name="ShowOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.showOnLoginPage"></a>

```csharp
public object ShowOnLoginPage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#show_on_login_page IdentityDomainsSelfRegistrationProfile#show_on_login_page}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#active IdentityDomainsSelfRegistrationProfile#active}.

---

##### `AfterSubmitText`<sup>Optional</sup> <a name="AfterSubmitText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.afterSubmitText"></a>

```csharp
public object AfterSubmitText { get; set; }
```

- *Type:* object

after_submit_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#after_submit_text IdentityDomainsSelfRegistrationProfile#after_submit_text}

---

##### `AllowedEmailDomains`<sup>Optional</sup> <a name="AllowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.allowedEmailDomains"></a>

```csharp
public string[] AllowedEmailDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#allowed_email_domains IdentityDomainsSelfRegistrationProfile#allowed_email_domains}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attributes IdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#attribute_sets IdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#authorization IdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `ConsentText`<sup>Optional</sup> <a name="ConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.consentText"></a>

```csharp
public object ConsentText { get; set; }
```

- *Type:* object

consent_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#consent_text IdentityDomainsSelfRegistrationProfile#consent_text}

---

##### `DefaultGroups`<sup>Optional</sup> <a name="DefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.defaultGroups"></a>

```csharp
public object DefaultGroups { get; set; }
```

- *Type:* object

default_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default_groups IdentityDomainsSelfRegistrationProfile#default_groups}

---

##### `DisallowedEmailDomains`<sup>Optional</sup> <a name="DisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.disallowedEmailDomains"></a>

```csharp
public string[] DisallowedEmailDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#disallowed_email_domains IdentityDomainsSelfRegistrationProfile#disallowed_email_domains}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#external_id IdentityDomainsSelfRegistrationProfile#external_id}.

---

##### `FooterLogo`<sup>Optional</sup> <a name="FooterLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerLogo"></a>

```csharp
public string FooterLogo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_logo IdentityDomainsSelfRegistrationProfile#footer_logo}.

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.footerText"></a>

```csharp
public object FooterText { get; set; }
```

- *Type:* object

footer_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#footer_text IdentityDomainsSelfRegistrationProfile#footer_text}

---

##### `HeaderLogo`<sup>Optional</sup> <a name="HeaderLogo" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerLogo"></a>

```csharp
public string HeaderLogo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_logo IdentityDomainsSelfRegistrationProfile#header_logo}.

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.headerText"></a>

```csharp
public object HeaderText { get; set; }
```

- *Type:* object

header_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#header_text IdentityDomainsSelfRegistrationProfile#header_text}

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#ocid IdentityDomainsSelfRegistrationProfile#ocid}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#resource_type_schema_version IdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#tags IdentityDomainsSelfRegistrationProfile#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.timeouts"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts">IdentityDomainsSelfRegistrationProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#timeouts IdentityDomainsSelfRegistrationProfile#timeouts}

---

##### `UserAttributes`<sup>Optional</sup> <a name="UserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConfig.property.userAttributes"></a>

```csharp
public object UserAttributes { get; set; }
```

- *Type:* object

user_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#user_attributes IdentityDomainsSelfRegistrationProfile#user_attributes}

---

### IdentityDomainsSelfRegistrationProfileConsentText <a name="IdentityDomainsSelfRegistrationProfileConsentText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileConsentText {
    string Locale,
    string Value,
    object Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default">Default</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentText.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileDefaultGroups <a name="IdentityDomainsSelfRegistrationProfileDefaultGroups" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileDefaultGroups {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroups.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileDisplayName <a name="IdentityDomainsSelfRegistrationProfileDisplayName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileDisplayName {
    string Locale,
    string Value,
    object Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default">Default</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayName.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileEmailTemplate <a name="IdentityDomainsSelfRegistrationProfileEmailTemplate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileEmailTemplate {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileFooterText <a name="IdentityDomainsSelfRegistrationProfileFooterText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileFooterText {
    string Locale,
    string Value,
    object Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default">Default</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterText.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileHeaderText <a name="IdentityDomainsSelfRegistrationProfileHeaderText" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileHeaderText {
    string Locale,
    string Value,
    object Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default">Default</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}. |

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#locale IdentityDomainsSelfRegistrationProfile#locale}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderText.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#default IdentityDomainsSelfRegistrationProfile#default}.

---

### IdentityDomainsSelfRegistrationProfileIdcsCreatedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileIdcsCreatedBy {

};
```


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy {

};
```


### IdentityDomainsSelfRegistrationProfileMeta <a name="IdentityDomainsSelfRegistrationProfileMeta" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileMeta {

};
```


### IdentityDomainsSelfRegistrationProfileTags <a name="IdentityDomainsSelfRegistrationProfileTags" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#key IdentityDomainsSelfRegistrationProfile#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

### IdentityDomainsSelfRegistrationProfileTimeouts <a name="IdentityDomainsSelfRegistrationProfileTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#create IdentityDomainsSelfRegistrationProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#delete IdentityDomainsSelfRegistrationProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#update IdentityDomainsSelfRegistrationProfile#update}.

---

### IdentityDomainsSelfRegistrationProfileUserAttributes <a name="IdentityDomainsSelfRegistrationProfileUserAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileUserAttributes {
    double SeqNumber,
    string Value,
    string FullyQualifiedAttributeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber">SeqNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName">FullyQualifiedAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}. |

---

##### `SeqNumber`<sup>Required</sup> <a name="SeqNumber" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.seqNumber"></a>

```csharp
public double SeqNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#seq_number IdentityDomainsSelfRegistrationProfile#seq_number}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#value IdentityDomainsSelfRegistrationProfile#value}.

---

##### `FullyQualifiedAttributeName`<sup>Optional</sup> <a name="FullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributes.property.fullyQualifiedAttributeName"></a>

```csharp
public string FullyQualifiedAttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_self_registration_profile#fully_qualified_attribute_name IdentityDomainsSelfRegistrationProfile#fully_qualified_attribute_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsSelfRegistrationProfileAfterSubmitTextList <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileAfterSubmitTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileConsentTextList <a name="IdentityDomainsSelfRegistrationProfileConsentTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileConsentTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileConsentTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileConsentTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileConsentTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsList <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileDefaultGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference <a name="IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileDisplayNameList <a name="IdentityDomainsSelfRegistrationProfileDisplayNameList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileDisplayNameList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference <a name="IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference <a name="IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileEmailTemplate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileEmailTemplate">IdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---


### IdentityDomainsSelfRegistrationProfileFooterTextList <a name="IdentityDomainsSelfRegistrationProfileFooterTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileFooterTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileFooterTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileFooterTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileFooterTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileHeaderTextList <a name="IdentityDomainsSelfRegistrationProfileHeaderTextList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileHeaderTextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference <a name="IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsCreatedBy">IdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a>

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference <a name="IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">IdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a>

---


### IdentityDomainsSelfRegistrationProfileMetaList <a name="IdentityDomainsSelfRegistrationProfileMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsSelfRegistrationProfileMetaOutputReference <a name="IdentityDomainsSelfRegistrationProfileMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsSelfRegistrationProfileMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileMeta">IdentityDomainsSelfRegistrationProfileMeta</a>

---


### IdentityDomainsSelfRegistrationProfileTagsList <a name="IdentityDomainsSelfRegistrationProfileTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileTagsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference <a name="IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileUserAttributesList <a name="IdentityDomainsSelfRegistrationProfileUserAttributesList" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileUserAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get"></a>

```csharp
private IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference <a name="IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName">ResetFullyQualifiedAttributeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullyQualifiedAttributeName` <a name="ResetFullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resetFullyQualifiedAttributeName"></a>

```csharp
private void ResetFullyQualifiedAttributeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable">Deletable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput">FullyQualifiedAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput">SeqNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName">FullyQualifiedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber">SeqNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable"></a>

```csharp
public IResolvable Deletable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `FullyQualifiedAttributeNameInput`<sup>Optional</sup> <a name="FullyQualifiedAttributeNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeNameInput"></a>

```csharp
public string FullyQualifiedAttributeNameInput { get; }
```

- *Type:* string

---

##### `SeqNumberInput`<sup>Optional</sup> <a name="SeqNumberInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumberInput"></a>

```csharp
public double SeqNumberInput { get; }
```

- *Type:* double

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `FullyQualifiedAttributeName`<sup>Required</sup> <a name="FullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```csharp
public string FullyQualifiedAttributeName { get; }
```

- *Type:* string

---

##### `SeqNumber`<sup>Required</sup> <a name="SeqNumber" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber"></a>

```csharp
public double SeqNumber { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsSelfRegistrationProfile.IdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



