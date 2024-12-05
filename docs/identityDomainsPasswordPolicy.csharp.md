# `identityDomainsPasswordPolicy` Submodule <a name="`identityDomainsPasswordPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsPasswordPolicy <a name="IdentityDomainsPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy oci_identity_domains_password_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicy(Construct Scope, string Id, IdentityDomainsPasswordPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig">IdentityDomainsPasswordPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig">IdentityDomainsPasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups">PutGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars">ResetAllowedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter">ResetDictionaryDelimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation">ResetDictionaryLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed">ResetDictionaryWordDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars">ResetDisallowedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings">ResetDisallowedSubstrings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues">ResetDisallowedUserAttributeValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters">ResetDistinctCharacters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed">ResetFirstNameDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset">ResetForcePasswordReset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed">ResetLastNameDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration">ResetLockoutDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts">ResetMaxIncorrectAttempts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars">ResetMaxRepeatedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars">ResetMaxSpecialChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals">ResetMinAlphaNumerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas">ResetMinAlphas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase">ResetMinLowerCase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals">ResetMinNumerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge">ResetMinPasswordAge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars">ResetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars">ResetMinUniqueChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase">ResetMinUpperCase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory">ResetNumPasswordsInHistory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter">ResetPasswordExpiresAfter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning">ResetPasswordExpireWarning</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength">ResetPasswordStrength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars">ResetRequiredChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet">ResetStartsWithAlphabet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed">ResetUserNameDisallowed</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGroups` <a name="PutGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups"></a>

```csharp
private void PutGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsPasswordPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

---

##### `ResetAllowedChars` <a name="ResetAllowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars"></a>

```csharp
private void ResetAllowedChars()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDictionaryDelimiter` <a name="ResetDictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter"></a>

```csharp
private void ResetDictionaryDelimiter()
```

##### `ResetDictionaryLocation` <a name="ResetDictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation"></a>

```csharp
private void ResetDictionaryLocation()
```

##### `ResetDictionaryWordDisallowed` <a name="ResetDictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed"></a>

```csharp
private void ResetDictionaryWordDisallowed()
```

##### `ResetDisallowedChars` <a name="ResetDisallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars"></a>

```csharp
private void ResetDisallowedChars()
```

##### `ResetDisallowedSubstrings` <a name="ResetDisallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings"></a>

```csharp
private void ResetDisallowedSubstrings()
```

##### `ResetDisallowedUserAttributeValues` <a name="ResetDisallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues"></a>

```csharp
private void ResetDisallowedUserAttributeValues()
```

##### `ResetDistinctCharacters` <a name="ResetDistinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters"></a>

```csharp
private void ResetDistinctCharacters()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetFirstNameDisallowed` <a name="ResetFirstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed"></a>

```csharp
private void ResetFirstNameDisallowed()
```

##### `ResetForcePasswordReset` <a name="ResetForcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset"></a>

```csharp
private void ResetForcePasswordReset()
```

##### `ResetGroups` <a name="ResetGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetLastNameDisallowed` <a name="ResetLastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed"></a>

```csharp
private void ResetLastNameDisallowed()
```

##### `ResetLockoutDuration` <a name="ResetLockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration"></a>

```csharp
private void ResetLockoutDuration()
```

##### `ResetMaxIncorrectAttempts` <a name="ResetMaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts"></a>

```csharp
private void ResetMaxIncorrectAttempts()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMaxRepeatedChars` <a name="ResetMaxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars"></a>

```csharp
private void ResetMaxRepeatedChars()
```

##### `ResetMaxSpecialChars` <a name="ResetMaxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars"></a>

```csharp
private void ResetMaxSpecialChars()
```

##### `ResetMinAlphaNumerals` <a name="ResetMinAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals"></a>

```csharp
private void ResetMinAlphaNumerals()
```

##### `ResetMinAlphas` <a name="ResetMinAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas"></a>

```csharp
private void ResetMinAlphas()
```

##### `ResetMinLength` <a name="ResetMinLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength"></a>

```csharp
private void ResetMinLength()
```

##### `ResetMinLowerCase` <a name="ResetMinLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase"></a>

```csharp
private void ResetMinLowerCase()
```

##### `ResetMinNumerals` <a name="ResetMinNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals"></a>

```csharp
private void ResetMinNumerals()
```

##### `ResetMinPasswordAge` <a name="ResetMinPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge"></a>

```csharp
private void ResetMinPasswordAge()
```

##### `ResetMinSpecialChars` <a name="ResetMinSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars"></a>

```csharp
private void ResetMinSpecialChars()
```

##### `ResetMinUniqueChars` <a name="ResetMinUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars"></a>

```csharp
private void ResetMinUniqueChars()
```

##### `ResetMinUpperCase` <a name="ResetMinUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase"></a>

```csharp
private void ResetMinUpperCase()
```

##### `ResetNumPasswordsInHistory` <a name="ResetNumPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory"></a>

```csharp
private void ResetNumPasswordsInHistory()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetPasswordExpiresAfter` <a name="ResetPasswordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter"></a>

```csharp
private void ResetPasswordExpiresAfter()
```

##### `ResetPasswordExpireWarning` <a name="ResetPasswordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning"></a>

```csharp
private void ResetPasswordExpireWarning()
```

##### `ResetPasswordStrength` <a name="ResetPasswordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength"></a>

```csharp
private void ResetPasswordStrength()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRequiredChars` <a name="ResetRequiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars"></a>

```csharp
private void ResetRequiredChars()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetStartsWithAlphabet` <a name="ResetStartsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet"></a>

```csharp
private void ResetStartsWithAlphabet()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserNameDisallowed` <a name="ResetUserNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed"></a>

```csharp
private void ResetUserNameDisallowed()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsPasswordPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsPasswordPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsPasswordPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsPasswordPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsPasswordPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsPasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsPasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules">ConfiguredPasswordPolicyRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups">Groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput">AllowedCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput">DictionaryDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput">DictionaryLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput">DictionaryWordDisallowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput">DisallowedCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput">DisallowedSubstringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput">DisallowedUserAttributeValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput">DistinctCharactersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput">FirstNameDisallowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput">ForcePasswordResetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput">GroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput">LastNameDisallowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput">LockoutDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput">MaxIncorrectAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput">MaxRepeatedCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput">MaxSpecialCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput">MinAlphaNumeralsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput">MinAlphasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput">MinLowerCaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput">MinNumeralsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput">MinPasswordAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput">MinSpecialCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput">MinUniqueCharsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput">MinUpperCaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput">NumPasswordsInHistoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput">PasswordExpiresAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput">PasswordExpireWarningInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput">PasswordStrengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput">RequiredCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput">StartsWithAlphabetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput">UserNameDisallowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars">AllowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter">DictionaryDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation">DictionaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed">DictionaryWordDisallowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars">DisallowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings">DisallowedSubstrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues">DisallowedUserAttributeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters">DistinctCharacters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed">FirstNameDisallowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset">ForcePasswordReset</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed">LastNameDisallowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration">LockoutDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars">MaxRepeatedChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars">MaxSpecialChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals">MinAlphaNumerals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas">MinAlphas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase">MinLowerCase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals">MinNumerals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge">MinPasswordAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars">MinSpecialChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars">MinUniqueChars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase">MinUpperCase</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory">NumPasswordsInHistory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter">PasswordExpiresAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning">PasswordExpireWarning</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength">PasswordStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars">RequiredChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet">StartsWithAlphabet</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed">UserNameDisallowed</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConfiguredPasswordPolicyRules`<sup>Required</sup> <a name="ConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules"></a>

```csharp
public IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList ConfiguredPasswordPolicyRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups"></a>

```csharp
public IdentityDomainsPasswordPolicyGroupsList Groups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsPasswordPolicyIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsPasswordPolicyIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta"></a>

```csharp
public IdentityDomainsPasswordPolicyMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags"></a>

```csharp
public IdentityDomainsPasswordPolicyTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts"></a>

```csharp
public IdentityDomainsPasswordPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a>

---

##### `AllowedCharsInput`<sup>Optional</sup> <a name="AllowedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput"></a>

```csharp
public string AllowedCharsInput { get; }
```

- *Type:* string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DictionaryDelimiterInput`<sup>Optional</sup> <a name="DictionaryDelimiterInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput"></a>

```csharp
public string DictionaryDelimiterInput { get; }
```

- *Type:* string

---

##### `DictionaryLocationInput`<sup>Optional</sup> <a name="DictionaryLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput"></a>

```csharp
public string DictionaryLocationInput { get; }
```

- *Type:* string

---

##### `DictionaryWordDisallowedInput`<sup>Optional</sup> <a name="DictionaryWordDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput"></a>

```csharp
public object DictionaryWordDisallowedInput { get; }
```

- *Type:* object

---

##### `DisallowedCharsInput`<sup>Optional</sup> <a name="DisallowedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput"></a>

```csharp
public string DisallowedCharsInput { get; }
```

- *Type:* string

---

##### `DisallowedSubstringsInput`<sup>Optional</sup> <a name="DisallowedSubstringsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput"></a>

```csharp
public string[] DisallowedSubstringsInput { get; }
```

- *Type:* string[]

---

##### `DisallowedUserAttributeValuesInput`<sup>Optional</sup> <a name="DisallowedUserAttributeValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput"></a>

```csharp
public string[] DisallowedUserAttributeValuesInput { get; }
```

- *Type:* string[]

---

##### `DistinctCharactersInput`<sup>Optional</sup> <a name="DistinctCharactersInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput"></a>

```csharp
public double DistinctCharactersInput { get; }
```

- *Type:* double

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `FirstNameDisallowedInput`<sup>Optional</sup> <a name="FirstNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput"></a>

```csharp
public object FirstNameDisallowedInput { get; }
```

- *Type:* object

---

##### `ForcePasswordResetInput`<sup>Optional</sup> <a name="ForcePasswordResetInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput"></a>

```csharp
public object ForcePasswordResetInput { get; }
```

- *Type:* object

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput"></a>

```csharp
public object GroupsInput { get; }
```

- *Type:* object

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `LastNameDisallowedInput`<sup>Optional</sup> <a name="LastNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput"></a>

```csharp
public object LastNameDisallowedInput { get; }
```

- *Type:* object

---

##### `LockoutDurationInput`<sup>Optional</sup> <a name="LockoutDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput"></a>

```csharp
public double LockoutDurationInput { get; }
```

- *Type:* double

---

##### `MaxIncorrectAttemptsInput`<sup>Optional</sup> <a name="MaxIncorrectAttemptsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput"></a>

```csharp
public double MaxIncorrectAttemptsInput { get; }
```

- *Type:* double

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MaxRepeatedCharsInput`<sup>Optional</sup> <a name="MaxRepeatedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput"></a>

```csharp
public double MaxRepeatedCharsInput { get; }
```

- *Type:* double

---

##### `MaxSpecialCharsInput`<sup>Optional</sup> <a name="MaxSpecialCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput"></a>

```csharp
public double MaxSpecialCharsInput { get; }
```

- *Type:* double

---

##### `MinAlphaNumeralsInput`<sup>Optional</sup> <a name="MinAlphaNumeralsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput"></a>

```csharp
public double MinAlphaNumeralsInput { get; }
```

- *Type:* double

---

##### `MinAlphasInput`<sup>Optional</sup> <a name="MinAlphasInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput"></a>

```csharp
public double MinAlphasInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `MinLowerCaseInput`<sup>Optional</sup> <a name="MinLowerCaseInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput"></a>

```csharp
public double MinLowerCaseInput { get; }
```

- *Type:* double

---

##### `MinNumeralsInput`<sup>Optional</sup> <a name="MinNumeralsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput"></a>

```csharp
public double MinNumeralsInput { get; }
```

- *Type:* double

---

##### `MinPasswordAgeInput`<sup>Optional</sup> <a name="MinPasswordAgeInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput"></a>

```csharp
public double MinPasswordAgeInput { get; }
```

- *Type:* double

---

##### `MinSpecialCharsInput`<sup>Optional</sup> <a name="MinSpecialCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput"></a>

```csharp
public double MinSpecialCharsInput { get; }
```

- *Type:* double

---

##### `MinUniqueCharsInput`<sup>Optional</sup> <a name="MinUniqueCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput"></a>

```csharp
public double MinUniqueCharsInput { get; }
```

- *Type:* double

---

##### `MinUpperCaseInput`<sup>Optional</sup> <a name="MinUpperCaseInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput"></a>

```csharp
public double MinUpperCaseInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumPasswordsInHistoryInput`<sup>Optional</sup> <a name="NumPasswordsInHistoryInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput"></a>

```csharp
public double NumPasswordsInHistoryInput { get; }
```

- *Type:* double

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `PasswordExpiresAfterInput`<sup>Optional</sup> <a name="PasswordExpiresAfterInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput"></a>

```csharp
public double PasswordExpiresAfterInput { get; }
```

- *Type:* double

---

##### `PasswordExpireWarningInput`<sup>Optional</sup> <a name="PasswordExpireWarningInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput"></a>

```csharp
public double PasswordExpireWarningInput { get; }
```

- *Type:* double

---

##### `PasswordStrengthInput`<sup>Optional</sup> <a name="PasswordStrengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput"></a>

```csharp
public string PasswordStrengthInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RequiredCharsInput`<sup>Optional</sup> <a name="RequiredCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput"></a>

```csharp
public string RequiredCharsInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `StartsWithAlphabetInput`<sup>Optional</sup> <a name="StartsWithAlphabetInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput"></a>

```csharp
public object StartsWithAlphabetInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserNameDisallowedInput`<sup>Optional</sup> <a name="UserNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput"></a>

```csharp
public object UserNameDisallowedInput { get; }
```

- *Type:* object

---

##### `AllowedChars`<sup>Required</sup> <a name="AllowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars"></a>

```csharp
public string AllowedChars { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DictionaryDelimiter`<sup>Required</sup> <a name="DictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter"></a>

```csharp
public string DictionaryDelimiter { get; }
```

- *Type:* string

---

##### `DictionaryLocation`<sup>Required</sup> <a name="DictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation"></a>

```csharp
public string DictionaryLocation { get; }
```

- *Type:* string

---

##### `DictionaryWordDisallowed`<sup>Required</sup> <a name="DictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed"></a>

```csharp
public object DictionaryWordDisallowed { get; }
```

- *Type:* object

---

##### `DisallowedChars`<sup>Required</sup> <a name="DisallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars"></a>

```csharp
public string DisallowedChars { get; }
```

- *Type:* string

---

##### `DisallowedSubstrings`<sup>Required</sup> <a name="DisallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings"></a>

```csharp
public string[] DisallowedSubstrings { get; }
```

- *Type:* string[]

---

##### `DisallowedUserAttributeValues`<sup>Required</sup> <a name="DisallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues"></a>

```csharp
public string[] DisallowedUserAttributeValues { get; }
```

- *Type:* string[]

---

##### `DistinctCharacters`<sup>Required</sup> <a name="DistinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters"></a>

```csharp
public double DistinctCharacters { get; }
```

- *Type:* double

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `FirstNameDisallowed`<sup>Required</sup> <a name="FirstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed"></a>

```csharp
public object FirstNameDisallowed { get; }
```

- *Type:* object

---

##### `ForcePasswordReset`<sup>Required</sup> <a name="ForcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset"></a>

```csharp
public object ForcePasswordReset { get; }
```

- *Type:* object

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `LastNameDisallowed`<sup>Required</sup> <a name="LastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed"></a>

```csharp
public object LastNameDisallowed { get; }
```

- *Type:* object

---

##### `LockoutDuration`<sup>Required</sup> <a name="LockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration"></a>

```csharp
public double LockoutDuration { get; }
```

- *Type:* double

---

##### `MaxIncorrectAttempts`<sup>Required</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts"></a>

```csharp
public double MaxIncorrectAttempts { get; }
```

- *Type:* double

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MaxRepeatedChars`<sup>Required</sup> <a name="MaxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars"></a>

```csharp
public double MaxRepeatedChars { get; }
```

- *Type:* double

---

##### `MaxSpecialChars`<sup>Required</sup> <a name="MaxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars"></a>

```csharp
public double MaxSpecialChars { get; }
```

- *Type:* double

---

##### `MinAlphaNumerals`<sup>Required</sup> <a name="MinAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals"></a>

```csharp
public double MinAlphaNumerals { get; }
```

- *Type:* double

---

##### `MinAlphas`<sup>Required</sup> <a name="MinAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas"></a>

```csharp
public double MinAlphas { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `MinLowerCase`<sup>Required</sup> <a name="MinLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase"></a>

```csharp
public double MinLowerCase { get; }
```

- *Type:* double

---

##### `MinNumerals`<sup>Required</sup> <a name="MinNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals"></a>

```csharp
public double MinNumerals { get; }
```

- *Type:* double

---

##### `MinPasswordAge`<sup>Required</sup> <a name="MinPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge"></a>

```csharp
public double MinPasswordAge { get; }
```

- *Type:* double

---

##### `MinSpecialChars`<sup>Required</sup> <a name="MinSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars"></a>

```csharp
public double MinSpecialChars { get; }
```

- *Type:* double

---

##### `MinUniqueChars`<sup>Required</sup> <a name="MinUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars"></a>

```csharp
public double MinUniqueChars { get; }
```

- *Type:* double

---

##### `MinUpperCase`<sup>Required</sup> <a name="MinUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase"></a>

```csharp
public double MinUpperCase { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumPasswordsInHistory`<sup>Required</sup> <a name="NumPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory"></a>

```csharp
public double NumPasswordsInHistory { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PasswordExpiresAfter`<sup>Required</sup> <a name="PasswordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter"></a>

```csharp
public double PasswordExpiresAfter { get; }
```

- *Type:* double

---

##### `PasswordExpireWarning`<sup>Required</sup> <a name="PasswordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning"></a>

```csharp
public double PasswordExpireWarning { get; }
```

- *Type:* double

---

##### `PasswordStrength`<sup>Required</sup> <a name="PasswordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength"></a>

```csharp
public string PasswordStrength { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RequiredChars`<sup>Required</sup> <a name="RequiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars"></a>

```csharp
public string RequiredChars { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `StartsWithAlphabet`<sup>Required</sup> <a name="StartsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet"></a>

```csharp
public object StartsWithAlphabet { get; }
```

- *Type:* object

---

##### `UserNameDisallowed`<sup>Required</sup> <a name="UserNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed"></a>

```csharp
public object UserNameDisallowed { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsPasswordPolicyConfig <a name="IdentityDomainsPasswordPolicyConfig" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string Name,
    string[] Schemas,
    string AllowedChars = null,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string Description = null,
    string DictionaryDelimiter = null,
    string DictionaryLocation = null,
    object DictionaryWordDisallowed = null,
    string DisallowedChars = null,
    string[] DisallowedSubstrings = null,
    string[] DisallowedUserAttributeValues = null,
    double DistinctCharacters = null,
    string ExternalId = null,
    object FirstNameDisallowed = null,
    object ForcePasswordReset = null,
    object Groups = null,
    object LastNameDisallowed = null,
    double LockoutDuration = null,
    double MaxIncorrectAttempts = null,
    double MaxLength = null,
    double MaxRepeatedChars = null,
    double MaxSpecialChars = null,
    double MinAlphaNumerals = null,
    double MinAlphas = null,
    double MinLength = null,
    double MinLowerCase = null,
    double MinNumerals = null,
    double MinPasswordAge = null,
    double MinSpecialChars = null,
    double MinUniqueChars = null,
    double MinUpperCase = null,
    double NumPasswordsInHistory = null,
    string Ocid = null,
    double PasswordExpiresAfter = null,
    double PasswordExpireWarning = null,
    string PasswordStrength = null,
    double Priority = null,
    string RequiredChars = null,
    string ResourceTypeSchemaVersion = null,
    object StartsWithAlphabet = null,
    object Tags = null,
    IdentityDomainsPasswordPolicyTimeouts Timeouts = null,
    object UserNameDisallowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars">AllowedChars</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter">DictionaryDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation">DictionaryLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed">DictionaryWordDisallowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars">DisallowedChars</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings">DisallowedSubstrings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues">DisallowedUserAttributeValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters">DistinctCharacters</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed">FirstNameDisallowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset">ForcePasswordReset</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups">Groups</a></code> | <code>object</code> | groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed">LastNameDisallowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration">LockoutDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength">MaxLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars">MaxRepeatedChars</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars">MaxSpecialChars</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals">MinAlphaNumerals</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas">MinAlphas</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength">MinLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase">MinLowerCase</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals">MinNumerals</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge">MinPasswordAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars">MinSpecialChars</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars">MinUniqueChars</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase">MinUpperCase</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory">NumPasswordsInHistory</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter">PasswordExpiresAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning">PasswordExpireWarning</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength">PasswordStrength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars">RequiredChars</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet">StartsWithAlphabet</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed">UserNameDisallowed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}.

---

##### `AllowedChars`<sup>Optional</sup> <a name="AllowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars"></a>

```csharp
public string AllowedChars { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}.

---

##### `DictionaryDelimiter`<sup>Optional</sup> <a name="DictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter"></a>

```csharp
public string DictionaryDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}.

---

##### `DictionaryLocation`<sup>Optional</sup> <a name="DictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation"></a>

```csharp
public string DictionaryLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}.

---

##### `DictionaryWordDisallowed`<sup>Optional</sup> <a name="DictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed"></a>

```csharp
public object DictionaryWordDisallowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}.

---

##### `DisallowedChars`<sup>Optional</sup> <a name="DisallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars"></a>

```csharp
public string DisallowedChars { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}.

---

##### `DisallowedSubstrings`<sup>Optional</sup> <a name="DisallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings"></a>

```csharp
public string[] DisallowedSubstrings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}.

---

##### `DisallowedUserAttributeValues`<sup>Optional</sup> <a name="DisallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues"></a>

```csharp
public string[] DisallowedUserAttributeValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}.

---

##### `DistinctCharacters`<sup>Optional</sup> <a name="DistinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters"></a>

```csharp
public double DistinctCharacters { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}.

---

##### `FirstNameDisallowed`<sup>Optional</sup> <a name="FirstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed"></a>

```csharp
public object FirstNameDisallowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}.

---

##### `ForcePasswordReset`<sup>Optional</sup> <a name="ForcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset"></a>

```csharp
public object ForcePasswordReset { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups"></a>

```csharp
public object Groups { get; set; }
```

- *Type:* object

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#groups IdentityDomainsPasswordPolicy#groups}

---

##### `LastNameDisallowed`<sup>Optional</sup> <a name="LastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed"></a>

```csharp
public object LastNameDisallowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}.

---

##### `LockoutDuration`<sup>Optional</sup> <a name="LockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration"></a>

```csharp
public double LockoutDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}.

---

##### `MaxIncorrectAttempts`<sup>Optional</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts"></a>

```csharp
public double MaxIncorrectAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}.

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}.

---

##### `MaxRepeatedChars`<sup>Optional</sup> <a name="MaxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars"></a>

```csharp
public double MaxRepeatedChars { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}.

---

##### `MaxSpecialChars`<sup>Optional</sup> <a name="MaxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars"></a>

```csharp
public double MaxSpecialChars { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}.

---

##### `MinAlphaNumerals`<sup>Optional</sup> <a name="MinAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals"></a>

```csharp
public double MinAlphaNumerals { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}.

---

##### `MinAlphas`<sup>Optional</sup> <a name="MinAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas"></a>

```csharp
public double MinAlphas { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}.

---

##### `MinLowerCase`<sup>Optional</sup> <a name="MinLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase"></a>

```csharp
public double MinLowerCase { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}.

---

##### `MinNumerals`<sup>Optional</sup> <a name="MinNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals"></a>

```csharp
public double MinNumerals { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}.

---

##### `MinPasswordAge`<sup>Optional</sup> <a name="MinPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge"></a>

```csharp
public double MinPasswordAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}.

---

##### `MinSpecialChars`<sup>Optional</sup> <a name="MinSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars"></a>

```csharp
public double MinSpecialChars { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}.

---

##### `MinUniqueChars`<sup>Optional</sup> <a name="MinUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars"></a>

```csharp
public double MinUniqueChars { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}.

---

##### `MinUpperCase`<sup>Optional</sup> <a name="MinUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase"></a>

```csharp
public double MinUpperCase { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}.

---

##### `NumPasswordsInHistory`<sup>Optional</sup> <a name="NumPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory"></a>

```csharp
public double NumPasswordsInHistory { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}.

---

##### `PasswordExpiresAfter`<sup>Optional</sup> <a name="PasswordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter"></a>

```csharp
public double PasswordExpiresAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}.

---

##### `PasswordExpireWarning`<sup>Optional</sup> <a name="PasswordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning"></a>

```csharp
public double PasswordExpireWarning { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}.

---

##### `PasswordStrength`<sup>Optional</sup> <a name="PasswordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength"></a>

```csharp
public string PasswordStrength { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}.

---

##### `RequiredChars`<sup>Optional</sup> <a name="RequiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars"></a>

```csharp
public string RequiredChars { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}.

---

##### `StartsWithAlphabet`<sup>Optional</sup> <a name="StartsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet"></a>

```csharp
public object StartsWithAlphabet { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#tags IdentityDomainsPasswordPolicy#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts"></a>

```csharp
public IdentityDomainsPasswordPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#timeouts IdentityDomainsPasswordPolicy#timeouts}

---

##### `UserNameDisallowed`<sup>Optional</sup> <a name="UserNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed"></a>

```csharp
public object UserNameDisallowed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}.

---

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules {

};
```


### IdentityDomainsPasswordPolicyGroups <a name="IdentityDomainsPasswordPolicyGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyGroups {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyIdcsCreatedBy <a name="IdentityDomainsPasswordPolicyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyIdcsCreatedBy {

};
```


### IdentityDomainsPasswordPolicyIdcsLastModifiedBy <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyIdcsLastModifiedBy {

};
```


### IdentityDomainsPasswordPolicyMeta <a name="IdentityDomainsPasswordPolicyMeta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyMeta {

};
```


### IdentityDomainsPasswordPolicyTags <a name="IdentityDomainsPasswordPolicyTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyTimeouts <a name="IdentityDomainsPasswordPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get"></a>

```csharp
private IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a>

---


### IdentityDomainsPasswordPolicyGroupsList <a name="IdentityDomainsPasswordPolicyGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get"></a>

```csharp
private IdentityDomainsPasswordPolicyGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsPasswordPolicyGroupsOutputReference <a name="IdentityDomainsPasswordPolicyGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsPasswordPolicyIdcsCreatedByList <a name="IdentityDomainsPasswordPolicyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsPasswordPolicyIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a>

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByList <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsPasswordPolicyIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a>

---


### IdentityDomainsPasswordPolicyMetaList <a name="IdentityDomainsPasswordPolicyMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get"></a>

```csharp
private IdentityDomainsPasswordPolicyMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyMetaOutputReference <a name="IdentityDomainsPasswordPolicyMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsPasswordPolicyMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a>

---


### IdentityDomainsPasswordPolicyTagsList <a name="IdentityDomainsPasswordPolicyTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get"></a>

```csharp
private IdentityDomainsPasswordPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsPasswordPolicyTagsOutputReference <a name="IdentityDomainsPasswordPolicyTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsPasswordPolicyTimeoutsOutputReference <a name="IdentityDomainsPasswordPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsPasswordPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



