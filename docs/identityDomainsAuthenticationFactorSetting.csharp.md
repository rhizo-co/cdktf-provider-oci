# `identityDomainsAuthenticationFactorSetting` Submodule <a name="`identityDomainsAuthenticationFactorSetting` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsAuthenticationFactorSetting <a name="IdentityDomainsAuthenticationFactorSetting" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSetting(Construct Scope, string Id, IdentityDomainsAuthenticationFactorSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig">IdentityDomainsAuthenticationFactorSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig">IdentityDomainsAuthenticationFactorSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings">PutBypassCodeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings">PutClientAppSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy">PutCompliancePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings">PutEmailSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions">PutEndpointRestrictions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings">PutIdentityStoreSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor">PutThirdPartyFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings">PutTotpSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">PutUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">PutUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAutoEnrollEmailFactorDisabled">ResetAutoEnrollEmailFactorDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailEnabled">ResetEmailEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailSettings">ResetEmailSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetFidoAuthenticatorEnabled">ResetFidoAuthenticatorEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetHideBackupFactorEnabled">ResetHideBackupFactorEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetIdentityStoreSettings">ResetIdentityStoreSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetPhoneCallEnabled">ResetPhoneCallEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetThirdPartyFactor">ResetThirdPartyFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">ResetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">ResetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUserEnrollmentDisabledFactors">ResetUserEnrollmentDisabledFactors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetYubicoOtpEnabled">ResetYubicoOtpEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBypassCodeSettings` <a name="PutBypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings"></a>

```csharp
private void PutBypassCodeSettings(IdentityDomainsAuthenticationFactorSettingBypassCodeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putBypassCodeSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---

##### `PutClientAppSettings` <a name="PutClientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings"></a>

```csharp
private void PutClientAppSettings(IdentityDomainsAuthenticationFactorSettingClientAppSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putClientAppSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---

##### `PutCompliancePolicy` <a name="PutCompliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy"></a>

```csharp
private void PutCompliancePolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putCompliancePolicy.parameter.value"></a>

- *Type:* object

---

##### `PutEmailSettings` <a name="PutEmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings"></a>

```csharp
private void PutEmailSettings(IdentityDomainsAuthenticationFactorSettingEmailSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEmailSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---

##### `PutEndpointRestrictions` <a name="PutEndpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions"></a>

```csharp
private void PutEndpointRestrictions(IdentityDomainsAuthenticationFactorSettingEndpointRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putEndpointRestrictions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---

##### `PutIdentityStoreSettings` <a name="PutIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings"></a>

```csharp
private void PutIdentityStoreSettings(IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putIdentityStoreSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings"></a>

```csharp
private void PutNotificationSettings(IdentityDomainsAuthenticationFactorSettingNotificationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutThirdPartyFactor` <a name="PutThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor"></a>

```csharp
private void PutThirdPartyFactor(IdentityDomainsAuthenticationFactorSettingThirdPartyFactor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putThirdPartyFactor.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsAuthenticationFactorSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

---

##### `PutTotpSettings` <a name="PutTotpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings"></a>

```csharp
private void PutTotpSettings(IdentityDomainsAuthenticationFactorSettingTotpSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putTotpSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---

##### `PutUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings` <a name="PutUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```csharp
private void PutUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---

##### `PutUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings` <a name="PutUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```csharp
private void PutUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.putUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetAutoEnrollEmailFactorDisabled` <a name="ResetAutoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetAutoEnrollEmailFactorDisabled"></a>

```csharp
private void ResetAutoEnrollEmailFactorDisabled()
```

##### `ResetEmailEnabled` <a name="ResetEmailEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailEnabled"></a>

```csharp
private void ResetEmailEnabled()
```

##### `ResetEmailSettings` <a name="ResetEmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetEmailSettings"></a>

```csharp
private void ResetEmailSettings()
```

##### `ResetFidoAuthenticatorEnabled` <a name="ResetFidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetFidoAuthenticatorEnabled"></a>

```csharp
private void ResetFidoAuthenticatorEnabled()
```

##### `ResetHideBackupFactorEnabled` <a name="ResetHideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetHideBackupFactorEnabled"></a>

```csharp
private void ResetHideBackupFactorEnabled()
```

##### `ResetIdentityStoreSettings` <a name="ResetIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetIdentityStoreSettings"></a>

```csharp
private void ResetIdentityStoreSettings()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetPhoneCallEnabled` <a name="ResetPhoneCallEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetPhoneCallEnabled"></a>

```csharp
private void ResetPhoneCallEnabled()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThirdPartyFactor` <a name="ResetThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetThirdPartyFactor"></a>

```csharp
private void ResetThirdPartyFactor()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings` <a name="ResetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```csharp
private void ResetUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings()
```

##### `ResetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings` <a name="ResetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```csharp
private void ResetUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings()
```

##### `ResetUserEnrollmentDisabledFactors` <a name="ResetUserEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetUserEnrollmentDisabledFactors"></a>

```csharp
private void ResetUserEnrollmentDisabledFactors()
```

##### `ResetYubicoOtpEnabled` <a name="ResetYubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.resetYubicoOtpEnabled"></a>

```csharp
private void ResetYubicoOtpEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsAuthenticationFactorSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsAuthenticationFactorSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsAuthenticationFactorSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsAuthenticationFactorSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsAuthenticationFactorSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsAuthenticationFactorSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsAuthenticationFactorSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings">BypassCodeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettings">ClientAppSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicy">CompliancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList">IdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettings">EmailSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions">EndpointRestrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference">IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings">IdentityStoreSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList">IdentityDomainsAuthenticationFactorSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory">MfaEnabledCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList">IdentityDomainsAuthenticationFactorSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor">ThirdPartyFactor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference">IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference">IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettings">TotpSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput">AuthenticationFactorSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabledInput">AutoEnrollEmailFactorDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabledInput">BypassCodeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettingsInput">BypassCodeSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettingsInput">ClientAppSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicyInput">CompliancePolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabledInput">EmailEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettingsInput">EmailSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictionsInput">EndpointRestrictionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabledInput">FidoAuthenticatorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabledInput">HideBackupFactorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettingsInput">IdentityStoreSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentTypeInput">MfaEnrollmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabledInput">PhoneCallEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabledInput">PushEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabledInput">SecurityQuestionsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabledInput">SmsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactorInput">ThirdPartyFactorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabledInput">TotpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettingsInput">TotpSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput">UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput">UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactorsInput">UserEnrollmentDisabledFactorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabledInput">YubicoOtpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId">AuthenticationFactorSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled">AutoEnrollEmailFactorDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled">BypassCodeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabled">EmailEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled">FidoAuthenticatorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled">HideBackupFactorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType">MfaEnrollmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled">PhoneCallEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabled">PushEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled">SecurityQuestionsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabled">SmsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabled">TotpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors">UserEnrollmentDisabledFactors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled">YubicoOtpEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BypassCodeSettings`<sup>Required</sup> <a name="BypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference BypassCodeSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference</a>

---

##### `ClientAppSettings`<sup>Required</sup> <a name="ClientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference ClientAppSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `CompliancePolicy`<sup>Required</sup> <a name="CompliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicy"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingCompliancePolicyList CompliancePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList">IdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `EmailSettings`<sup>Required</sup> <a name="EmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference EmailSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference</a>

---

##### `EndpointRestrictions`<sup>Required</sup> <a name="EndpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference EndpointRestrictions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference">IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `IdentityStoreSettings`<sup>Required</sup> <a name="IdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference IdentityStoreSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.meta"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList">IdentityDomainsAuthenticationFactorSettingMetaList</a>

---

##### `MfaEnabledCategory`<sup>Required</sup> <a name="MfaEnabledCategory" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory"></a>

```csharp
public string MfaEnabledCategory { get; }
```

- *Type:* string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference NotificationSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tags"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList">IdentityDomainsAuthenticationFactorSettingTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `ThirdPartyFactor`<sup>Required</sup> <a name="ThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference ThirdPartyFactor { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference">IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeouts"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference">IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference</a>

---

##### `TotpSettings`<sup>Required</sup> <a name="TotpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference TotpSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthenticationFactorSettingIdInput`<sup>Optional</sup> <a name="AuthenticationFactorSettingIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput"></a>

```csharp
public string AuthenticationFactorSettingIdInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `AutoEnrollEmailFactorDisabledInput`<sup>Optional</sup> <a name="AutoEnrollEmailFactorDisabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabledInput"></a>

```csharp
public object AutoEnrollEmailFactorDisabledInput { get; }
```

- *Type:* object

---

##### `BypassCodeEnabledInput`<sup>Optional</sup> <a name="BypassCodeEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabledInput"></a>

```csharp
public object BypassCodeEnabledInput { get; }
```

- *Type:* object

---

##### `BypassCodeSettingsInput`<sup>Optional</sup> <a name="BypassCodeSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettings BypassCodeSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---

##### `ClientAppSettingsInput`<sup>Optional</sup> <a name="ClientAppSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.clientAppSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingClientAppSettings ClientAppSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---

##### `CompliancePolicyInput`<sup>Optional</sup> <a name="CompliancePolicyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.compliancePolicyInput"></a>

```csharp
public object CompliancePolicyInput { get; }
```

- *Type:* object

---

##### `EmailEnabledInput`<sup>Optional</sup> <a name="EmailEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabledInput"></a>

```csharp
public object EmailEnabledInput { get; }
```

- *Type:* object

---

##### `EmailSettingsInput`<sup>Optional</sup> <a name="EmailSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEmailSettings EmailSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---

##### `EndpointRestrictionsInput`<sup>Optional</sup> <a name="EndpointRestrictionsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.endpointRestrictionsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictions EndpointRestrictionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---

##### `FidoAuthenticatorEnabledInput`<sup>Optional</sup> <a name="FidoAuthenticatorEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabledInput"></a>

```csharp
public object FidoAuthenticatorEnabledInput { get; }
```

- *Type:* object

---

##### `HideBackupFactorEnabledInput`<sup>Optional</sup> <a name="HideBackupFactorEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabledInput"></a>

```csharp
public object HideBackupFactorEnabledInput { get; }
```

- *Type:* object

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdentityStoreSettingsInput`<sup>Optional</sup> <a name="IdentityStoreSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.identityStoreSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings IdentityStoreSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---

##### `MfaEnrollmentTypeInput`<sup>Optional</sup> <a name="MfaEnrollmentTypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentTypeInput"></a>

```csharp
public string MfaEnrollmentTypeInput { get; }
```

- *Type:* string

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.notificationSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingNotificationSettings NotificationSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `PhoneCallEnabledInput`<sup>Optional</sup> <a name="PhoneCallEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabledInput"></a>

```csharp
public object PhoneCallEnabledInput { get; }
```

- *Type:* object

---

##### `PushEnabledInput`<sup>Optional</sup> <a name="PushEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabledInput"></a>

```csharp
public object PushEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `SecurityQuestionsEnabledInput`<sup>Optional</sup> <a name="SecurityQuestionsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabledInput"></a>

```csharp
public object SecurityQuestionsEnabledInput { get; }
```

- *Type:* object

---

##### `SmsEnabledInput`<sup>Optional</sup> <a name="SmsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabledInput"></a>

```csharp
public object SmsEnabledInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `ThirdPartyFactorInput`<sup>Optional</sup> <a name="ThirdPartyFactorInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactorInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactor ThirdPartyFactorInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TotpEnabledInput`<sup>Optional</sup> <a name="TotpEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabledInput"></a>

```csharp
public object TotpEnabledInput { get; }
```

- *Type:* object

---

##### `TotpSettingsInput`<sup>Optional</sup> <a name="TotpSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingTotpSettings TotpSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---

##### `UserEnrollmentDisabledFactorsInput`<sup>Optional</sup> <a name="UserEnrollmentDisabledFactorsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactorsInput"></a>

```csharp
public string[] UserEnrollmentDisabledFactorsInput { get; }
```

- *Type:* string[]

---

##### `YubicoOtpEnabledInput`<sup>Optional</sup> <a name="YubicoOtpEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabledInput"></a>

```csharp
public object YubicoOtpEnabledInput { get; }
```

- *Type:* object

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `AuthenticationFactorSettingId`<sup>Required</sup> <a name="AuthenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId"></a>

```csharp
public string AuthenticationFactorSettingId { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `AutoEnrollEmailFactorDisabled`<sup>Required</sup> <a name="AutoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled"></a>

```csharp
public object AutoEnrollEmailFactorDisabled { get; }
```

- *Type:* object

---

##### `BypassCodeEnabled`<sup>Required</sup> <a name="BypassCodeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled"></a>

```csharp
public object BypassCodeEnabled { get; }
```

- *Type:* object

---

##### `EmailEnabled`<sup>Required</sup> <a name="EmailEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.emailEnabled"></a>

```csharp
public object EmailEnabled { get; }
```

- *Type:* object

---

##### `FidoAuthenticatorEnabled`<sup>Required</sup> <a name="FidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled"></a>

```csharp
public object FidoAuthenticatorEnabled { get; }
```

- *Type:* object

---

##### `HideBackupFactorEnabled`<sup>Required</sup> <a name="HideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled"></a>

```csharp
public object HideBackupFactorEnabled { get; }
```

- *Type:* object

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `MfaEnrollmentType`<sup>Required</sup> <a name="MfaEnrollmentType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType"></a>

```csharp
public string MfaEnrollmentType { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PhoneCallEnabled`<sup>Required</sup> <a name="PhoneCallEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled"></a>

```csharp
public object PhoneCallEnabled { get; }
```

- *Type:* object

---

##### `PushEnabled`<sup>Required</sup> <a name="PushEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.pushEnabled"></a>

```csharp
public object PushEnabled { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `SecurityQuestionsEnabled`<sup>Required</sup> <a name="SecurityQuestionsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled"></a>

```csharp
public object SecurityQuestionsEnabled { get; }
```

- *Type:* object

---

##### `SmsEnabled`<sup>Required</sup> <a name="SmsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.smsEnabled"></a>

```csharp
public object SmsEnabled { get; }
```

- *Type:* object

---

##### `TotpEnabled`<sup>Required</sup> <a name="TotpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.totpEnabled"></a>

```csharp
public object TotpEnabled { get; }
```

- *Type:* object

---

##### `UserEnrollmentDisabledFactors`<sup>Required</sup> <a name="UserEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors"></a>

```csharp
public string[] UserEnrollmentDisabledFactors { get; }
```

- *Type:* string[]

---

##### `YubicoOtpEnabled`<sup>Required</sup> <a name="YubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled"></a>

```csharp
public object YubicoOtpEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsAuthenticationFactorSettingBypassCodeSettings <a name="IdentityDomainsAuthenticationFactorSettingBypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingBypassCodeSettings {
    double HelpDeskCodeExpiryInMins,
    object HelpDeskGenerationEnabled,
    double HelpDeskMaxUsage,
    double Length,
    double MaxActive,
    object SelfServiceGenerationEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskCodeExpiryInMins">HelpDeskCodeExpiryInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskGenerationEnabled">HelpDeskGenerationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskMaxUsage">HelpDeskMaxUsage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.length">Length</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.maxActive">MaxActive</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.selfServiceGenerationEnabled">SelfServiceGenerationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}. |

---

##### `HelpDeskCodeExpiryInMins`<sup>Required</sup> <a name="HelpDeskCodeExpiryInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskCodeExpiryInMins"></a>

```csharp
public double HelpDeskCodeExpiryInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_code_expiry_in_mins IdentityDomainsAuthenticationFactorSetting#help_desk_code_expiry_in_mins}.

---

##### `HelpDeskGenerationEnabled`<sup>Required</sup> <a name="HelpDeskGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskGenerationEnabled"></a>

```csharp
public object HelpDeskGenerationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_generation_enabled IdentityDomainsAuthenticationFactorSetting#help_desk_generation_enabled}.

---

##### `HelpDeskMaxUsage`<sup>Required</sup> <a name="HelpDeskMaxUsage" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.helpDeskMaxUsage"></a>

```csharp
public double HelpDeskMaxUsage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#help_desk_max_usage IdentityDomainsAuthenticationFactorSetting#help_desk_max_usage}.

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.length"></a>

```csharp
public double Length { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#length IdentityDomainsAuthenticationFactorSetting#length}.

---

##### `MaxActive`<sup>Required</sup> <a name="MaxActive" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.maxActive"></a>

```csharp
public double MaxActive { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_active IdentityDomainsAuthenticationFactorSetting#max_active}.

---

##### `SelfServiceGenerationEnabled`<sup>Required</sup> <a name="SelfServiceGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings.property.selfServiceGenerationEnabled"></a>

```csharp
public object SelfServiceGenerationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#self_service_generation_enabled IdentityDomainsAuthenticationFactorSetting#self_service_generation_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingClientAppSettings <a name="IdentityDomainsAuthenticationFactorSettingClientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingClientAppSettings {
    string DeviceProtectionPolicy,
    double InitialLockoutPeriodInSecs,
    double KeyPairLength,
    string LockoutEscalationPattern,
    double MaxFailuresBeforeLockout,
    double MaxFailuresBeforeWarning,
    double MaxLockoutIntervalInSecs,
    double MinPinLength,
    double PolicyUpdateFreqInDays,
    string RequestSigningAlgo,
    string SharedSecretEncoding,
    object UnlockAppForEachRequestEnabled,
    double UnlockAppIntervalInSecs,
    object UnlockOnAppForegroundEnabled,
    object UnlockOnAppStartEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.deviceProtectionPolicy">DeviceProtectionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.initialLockoutPeriodInSecs">InitialLockoutPeriodInSecs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.keyPairLength">KeyPairLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.lockoutEscalationPattern">LockoutEscalationPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeLockout">MaxFailuresBeforeLockout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeWarning">MaxFailuresBeforeWarning</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxLockoutIntervalInSecs">MaxLockoutIntervalInSecs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.minPinLength">MinPinLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.policyUpdateFreqInDays">PolicyUpdateFreqInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.requestSigningAlgo">RequestSigningAlgo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.sharedSecretEncoding">SharedSecretEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppForEachRequestEnabled">UnlockAppForEachRequestEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppIntervalInSecs">UnlockAppIntervalInSecs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppForegroundEnabled">UnlockOnAppForegroundEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppStartEnabled">UnlockOnAppStartEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}. |

---

##### `DeviceProtectionPolicy`<sup>Required</sup> <a name="DeviceProtectionPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.deviceProtectionPolicy"></a>

```csharp
public string DeviceProtectionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#device_protection_policy IdentityDomainsAuthenticationFactorSetting#device_protection_policy}.

---

##### `InitialLockoutPeriodInSecs`<sup>Required</sup> <a name="InitialLockoutPeriodInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.initialLockoutPeriodInSecs"></a>

```csharp
public double InitialLockoutPeriodInSecs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#initial_lockout_period_in_secs IdentityDomainsAuthenticationFactorSetting#initial_lockout_period_in_secs}.

---

##### `KeyPairLength`<sup>Required</sup> <a name="KeyPairLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.keyPairLength"></a>

```csharp
public double KeyPairLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_pair_length IdentityDomainsAuthenticationFactorSetting#key_pair_length}.

---

##### `LockoutEscalationPattern`<sup>Required</sup> <a name="LockoutEscalationPattern" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.lockoutEscalationPattern"></a>

```csharp
public string LockoutEscalationPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#lockout_escalation_pattern IdentityDomainsAuthenticationFactorSetting#lockout_escalation_pattern}.

---

##### `MaxFailuresBeforeLockout`<sup>Required</sup> <a name="MaxFailuresBeforeLockout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeLockout"></a>

```csharp
public double MaxFailuresBeforeLockout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_lockout IdentityDomainsAuthenticationFactorSetting#max_failures_before_lockout}.

---

##### `MaxFailuresBeforeWarning`<sup>Required</sup> <a name="MaxFailuresBeforeWarning" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxFailuresBeforeWarning"></a>

```csharp
public double MaxFailuresBeforeWarning { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_failures_before_warning IdentityDomainsAuthenticationFactorSetting#max_failures_before_warning}.

---

##### `MaxLockoutIntervalInSecs`<sup>Required</sup> <a name="MaxLockoutIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.maxLockoutIntervalInSecs"></a>

```csharp
public double MaxLockoutIntervalInSecs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_lockout_interval_in_secs IdentityDomainsAuthenticationFactorSetting#max_lockout_interval_in_secs}.

---

##### `MinPinLength`<sup>Required</sup> <a name="MinPinLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.minPinLength"></a>

```csharp
public double MinPinLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#min_pin_length IdentityDomainsAuthenticationFactorSetting#min_pin_length}.

---

##### `PolicyUpdateFreqInDays`<sup>Required</sup> <a name="PolicyUpdateFreqInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.policyUpdateFreqInDays"></a>

```csharp
public double PolicyUpdateFreqInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#policy_update_freq_in_days IdentityDomainsAuthenticationFactorSetting#policy_update_freq_in_days}.

---

##### `RequestSigningAlgo`<sup>Required</sup> <a name="RequestSigningAlgo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.requestSigningAlgo"></a>

```csharp
public string RequestSigningAlgo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#request_signing_algo IdentityDomainsAuthenticationFactorSetting#request_signing_algo}.

---

##### `SharedSecretEncoding`<sup>Required</sup> <a name="SharedSecretEncoding" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.sharedSecretEncoding"></a>

```csharp
public string SharedSecretEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#shared_secret_encoding IdentityDomainsAuthenticationFactorSetting#shared_secret_encoding}.

---

##### `UnlockAppForEachRequestEnabled`<sup>Required</sup> <a name="UnlockAppForEachRequestEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppForEachRequestEnabled"></a>

```csharp
public object UnlockAppForEachRequestEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_for_each_request_enabled IdentityDomainsAuthenticationFactorSetting#unlock_app_for_each_request_enabled}.

---

##### `UnlockAppIntervalInSecs`<sup>Required</sup> <a name="UnlockAppIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockAppIntervalInSecs"></a>

```csharp
public double UnlockAppIntervalInSecs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_app_interval_in_secs IdentityDomainsAuthenticationFactorSetting#unlock_app_interval_in_secs}.

---

##### `UnlockOnAppForegroundEnabled`<sup>Required</sup> <a name="UnlockOnAppForegroundEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppForegroundEnabled"></a>

```csharp
public object UnlockOnAppForegroundEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_foreground_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_foreground_enabled}.

---

##### `UnlockOnAppStartEnabled`<sup>Required</sup> <a name="UnlockOnAppStartEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings.property.unlockOnAppStartEnabled"></a>

```csharp
public object UnlockOnAppStartEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#unlock_on_app_start_enabled IdentityDomainsAuthenticationFactorSetting#unlock_on_app_start_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingCompliancePolicy <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingCompliancePolicy {
    string Action,
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#action IdentityDomainsAuthenticationFactorSetting#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#name IdentityDomainsAuthenticationFactorSetting#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#action IdentityDomainsAuthenticationFactorSetting#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#name IdentityDomainsAuthenticationFactorSetting#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicy.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}.

---

### IdentityDomainsAuthenticationFactorSettingConfig <a name="IdentityDomainsAuthenticationFactorSettingConfig" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthenticationFactorSettingId,
    object BypassCodeEnabled,
    IdentityDomainsAuthenticationFactorSettingBypassCodeSettings BypassCodeSettings,
    IdentityDomainsAuthenticationFactorSettingClientAppSettings ClientAppSettings,
    object CompliancePolicy,
    IdentityDomainsAuthenticationFactorSettingEndpointRestrictions EndpointRestrictions,
    string IdcsEndpoint,
    string MfaEnrollmentType,
    IdentityDomainsAuthenticationFactorSettingNotificationSettings NotificationSettings,
    object PushEnabled,
    string[] Schemas,
    object SecurityQuestionsEnabled,
    object SmsEnabled,
    object TotpEnabled,
    IdentityDomainsAuthenticationFactorSettingTotpSettings TotpSettings,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    object AutoEnrollEmailFactorDisabled = null,
    object EmailEnabled = null,
    IdentityDomainsAuthenticationFactorSettingEmailSettings EmailSettings = null,
    object FidoAuthenticatorEnabled = null,
    object HideBackupFactorEnabled = null,
    IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings IdentityStoreSettings = null,
    string Ocid = null,
    object PhoneCallEnabled = null,
    string ResourceTypeSchemaVersion = null,
    object Tags = null,
    IdentityDomainsAuthenticationFactorSettingThirdPartyFactor ThirdPartyFactor = null,
    IdentityDomainsAuthenticationFactorSettingTimeouts Timeouts = null,
    IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings = null,
    IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings = null,
    string[] UserEnrollmentDisabledFactors = null,
    object YubicoOtpEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId">AuthenticationFactorSettingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeEnabled">BypassCodeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeSettings">BypassCodeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | bypass_code_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.clientAppSettings">ClientAppSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | client_app_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.compliancePolicy">CompliancePolicy</a></code> | <code>object</code> | compliance_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.endpointRestrictions">EndpointRestrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | endpoint_restrictions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.mfaEnrollmentType">MfaEnrollmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.pushEnabled">PushEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.securityQuestionsEnabled">SecurityQuestionsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.smsEnabled">SmsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpEnabled">TotpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpSettings">TotpSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | totp_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.autoEnrollEmailFactorDisabled">AutoEnrollEmailFactorDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailEnabled">EmailEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailSettings">EmailSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | email_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.fidoAuthenticatorEnabled">FidoAuthenticatorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.hideBackupFactorEnabled">HideBackupFactorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.identityStoreSettings">IdentityStoreSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | identity_store_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.phoneCallEnabled">PhoneCallEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.thirdPartyFactor">ThirdPartyFactor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | third_party_factor block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.userEnrollmentDisabledFactors">UserEnrollmentDisabledFactors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.yubicoOtpEnabled">YubicoOtpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthenticationFactorSettingId`<sup>Required</sup> <a name="AuthenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId"></a>

```csharp
public string AuthenticationFactorSettingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authentication_factor_setting_id IdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `BypassCodeEnabled`<sup>Required</sup> <a name="BypassCodeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeEnabled"></a>

```csharp
public object BypassCodeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_enabled IdentityDomainsAuthenticationFactorSetting#bypass_code_enabled}.

---

##### `BypassCodeSettings`<sup>Required</sup> <a name="BypassCodeSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.bypassCodeSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettings BypassCodeSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

bypass_code_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#bypass_code_settings IdentityDomainsAuthenticationFactorSetting#bypass_code_settings}

---

##### `ClientAppSettings`<sup>Required</sup> <a name="ClientAppSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.clientAppSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingClientAppSettings ClientAppSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

client_app_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#client_app_settings IdentityDomainsAuthenticationFactorSetting#client_app_settings}

---

##### `CompliancePolicy`<sup>Required</sup> <a name="CompliancePolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.compliancePolicy"></a>

```csharp
public object CompliancePolicy { get; set; }
```

- *Type:* object

compliance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#compliance_policy IdentityDomainsAuthenticationFactorSetting#compliance_policy}

---

##### `EndpointRestrictions`<sup>Required</sup> <a name="EndpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.endpointRestrictions"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictions EndpointRestrictions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

endpoint_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#endpoint_restrictions IdentityDomainsAuthenticationFactorSetting#endpoint_restrictions}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#idcs_endpoint IdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `MfaEnrollmentType`<sup>Required</sup> <a name="MfaEnrollmentType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.mfaEnrollmentType"></a>

```csharp
public string MfaEnrollmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mfa_enrollment_type IdentityDomainsAuthenticationFactorSetting#mfa_enrollment_type}.

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.notificationSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingNotificationSettings NotificationSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#notification_settings IdentityDomainsAuthenticationFactorSetting#notification_settings}

---

##### `PushEnabled`<sup>Required</sup> <a name="PushEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.pushEnabled"></a>

```csharp
public object PushEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#push_enabled IdentityDomainsAuthenticationFactorSetting#push_enabled}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#schemas IdentityDomainsAuthenticationFactorSetting#schemas}.

---

##### `SecurityQuestionsEnabled`<sup>Required</sup> <a name="SecurityQuestionsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.securityQuestionsEnabled"></a>

```csharp
public object SecurityQuestionsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#security_questions_enabled IdentityDomainsAuthenticationFactorSetting#security_questions_enabled}.

---

##### `SmsEnabled`<sup>Required</sup> <a name="SmsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.smsEnabled"></a>

```csharp
public object SmsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_enabled IdentityDomainsAuthenticationFactorSetting#sms_enabled}.

---

##### `TotpEnabled`<sup>Required</sup> <a name="TotpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpEnabled"></a>

```csharp
public object TotpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_enabled IdentityDomainsAuthenticationFactorSetting#totp_enabled}.

---

##### `TotpSettings`<sup>Required</sup> <a name="TotpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.totpSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingTotpSettings TotpSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

totp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#totp_settings IdentityDomainsAuthenticationFactorSetting#totp_settings}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attributes IdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attribute_sets IdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authorization IdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `AutoEnrollEmailFactorDisabled`<sup>Optional</sup> <a name="AutoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.autoEnrollEmailFactorDisabled"></a>

```csharp
public object AutoEnrollEmailFactorDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#auto_enroll_email_factor_disabled IdentityDomainsAuthenticationFactorSetting#auto_enroll_email_factor_disabled}.

---

##### `EmailEnabled`<sup>Optional</sup> <a name="EmailEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailEnabled"></a>

```csharp
public object EmailEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_enabled IdentityDomainsAuthenticationFactorSetting#email_enabled}.

---

##### `EmailSettings`<sup>Optional</sup> <a name="EmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.emailSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEmailSettings EmailSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

email_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_settings IdentityDomainsAuthenticationFactorSetting#email_settings}

---

##### `FidoAuthenticatorEnabled`<sup>Optional</sup> <a name="FidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.fidoAuthenticatorEnabled"></a>

```csharp
public object FidoAuthenticatorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#fido_authenticator_enabled IdentityDomainsAuthenticationFactorSetting#fido_authenticator_enabled}.

---

##### `HideBackupFactorEnabled`<sup>Optional</sup> <a name="HideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.hideBackupFactorEnabled"></a>

```csharp
public object HideBackupFactorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hide_backup_factor_enabled IdentityDomainsAuthenticationFactorSetting#hide_backup_factor_enabled}.

---

##### `IdentityStoreSettings`<sup>Optional</sup> <a name="IdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.identityStoreSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings IdentityStoreSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

identity_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#identity_store_settings IdentityDomainsAuthenticationFactorSetting#identity_store_settings}

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#ocid IdentityDomainsAuthenticationFactorSetting#ocid}.

---

##### `PhoneCallEnabled`<sup>Optional</sup> <a name="PhoneCallEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.phoneCallEnabled"></a>

```csharp
public object PhoneCallEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#phone_call_enabled IdentityDomainsAuthenticationFactorSetting#phone_call_enabled}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#resource_type_schema_version IdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#tags IdentityDomainsAuthenticationFactorSetting#tags}

---

##### `ThirdPartyFactor`<sup>Optional</sup> <a name="ThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.thirdPartyFactor"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactor ThirdPartyFactor { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

third_party_factor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#third_party_factor IdentityDomainsAuthenticationFactorSetting#third_party_factor}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.timeouts"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts">IdentityDomainsAuthenticationFactorSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeouts IdentityDomainsAuthenticationFactorSetting#timeouts}

---

##### `UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionfido_authentication_factor_settings}

---

##### `UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings IdentityDomainsAuthenticationFactorSetting#urnietfparamsscimschemasoracleidcsextensionthird_party_authentication_factor_settings}

---

##### `UserEnrollmentDisabledFactors`<sup>Optional</sup> <a name="UserEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.userEnrollmentDisabledFactors"></a>

```csharp
public string[] UserEnrollmentDisabledFactors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_enrollment_disabled_factors IdentityDomainsAuthenticationFactorSetting#user_enrollment_disabled_factors}.

---

##### `YubicoOtpEnabled`<sup>Optional</sup> <a name="YubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingConfig.property.yubicoOtpEnabled"></a>

```csharp
public object YubicoOtpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#yubico_otp_enabled IdentityDomainsAuthenticationFactorSetting#yubico_otp_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingEmailSettings <a name="IdentityDomainsAuthenticationFactorSettingEmailSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingEmailSettings {
    object EmailLinkEnabled,
    string EmailLinkCustomUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkEnabled">EmailLinkEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkCustomUrl">EmailLinkCustomUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}. |

---

##### `EmailLinkEnabled`<sup>Required</sup> <a name="EmailLinkEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkEnabled"></a>

```csharp
public object EmailLinkEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_enabled IdentityDomainsAuthenticationFactorSetting#email_link_enabled}.

---

##### `EmailLinkCustomUrl`<sup>Optional</sup> <a name="EmailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings.property.emailLinkCustomUrl"></a>

```csharp
public string EmailLinkCustomUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_link_custom_url IdentityDomainsAuthenticationFactorSetting#email_link_custom_url}.

---

### IdentityDomainsAuthenticationFactorSettingEndpointRestrictions <a name="IdentityDomainsAuthenticationFactorSettingEndpointRestrictions" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingEndpointRestrictions {
    double MaxEndpointTrustDurationInDays,
    double MaxEnrolledDevices,
    double MaxIncorrectAttempts,
    double MaxTrustedEndpoints,
    object TrustedEndpointsEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEndpointTrustDurationInDays">MaxEndpointTrustDurationInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEnrolledDevices">MaxEnrolledDevices</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxTrustedEndpoints">MaxTrustedEndpoints</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.trustedEndpointsEnabled">TrustedEndpointsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}. |

---

##### `MaxEndpointTrustDurationInDays`<sup>Required</sup> <a name="MaxEndpointTrustDurationInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEndpointTrustDurationInDays"></a>

```csharp
public double MaxEndpointTrustDurationInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_endpoint_trust_duration_in_days IdentityDomainsAuthenticationFactorSetting#max_endpoint_trust_duration_in_days}.

---

##### `MaxEnrolledDevices`<sup>Required</sup> <a name="MaxEnrolledDevices" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxEnrolledDevices"></a>

```csharp
public double MaxEnrolledDevices { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_enrolled_devices IdentityDomainsAuthenticationFactorSetting#max_enrolled_devices}.

---

##### `MaxIncorrectAttempts`<sup>Required</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxIncorrectAttempts"></a>

```csharp
public double MaxIncorrectAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_incorrect_attempts IdentityDomainsAuthenticationFactorSetting#max_incorrect_attempts}.

---

##### `MaxTrustedEndpoints`<sup>Required</sup> <a name="MaxTrustedEndpoints" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.maxTrustedEndpoints"></a>

```csharp
public double MaxTrustedEndpoints { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#max_trusted_endpoints IdentityDomainsAuthenticationFactorSetting#max_trusted_endpoints}.

---

##### `TrustedEndpointsEnabled`<sup>Required</sup> <a name="TrustedEndpointsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions.property.trustedEndpointsEnabled"></a>

```csharp
public object TrustedEndpointsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#trusted_endpoints_enabled IdentityDomainsAuthenticationFactorSetting#trusted_endpoints_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy {

};
```


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy {

};
```


### IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings <a name="IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings {
    object MobileNumberEnabled = null,
    object MobileNumberUpdateEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberEnabled">MobileNumberEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberUpdateEnabled">MobileNumberUpdateEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}. |

---

##### `MobileNumberEnabled`<sup>Optional</sup> <a name="MobileNumberEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberEnabled"></a>

```csharp
public object MobileNumberEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_enabled}.

---

##### `MobileNumberUpdateEnabled`<sup>Optional</sup> <a name="MobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.property.mobileNumberUpdateEnabled"></a>

```csharp
public object MobileNumberUpdateEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#mobile_number_update_enabled IdentityDomainsAuthenticationFactorSetting#mobile_number_update_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingMeta <a name="IdentityDomainsAuthenticationFactorSettingMeta" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingMeta {

};
```


### IdentityDomainsAuthenticationFactorSettingNotificationSettings <a name="IdentityDomainsAuthenticationFactorSettingNotificationSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingNotificationSettings {
    object PullEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.property.pullEnabled">PullEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}. |

---

##### `PullEnabled`<sup>Required</sup> <a name="PullEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings.property.pullEnabled"></a>

```csharp
public object PullEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#pull_enabled IdentityDomainsAuthenticationFactorSetting#pull_enabled}.

---

### IdentityDomainsAuthenticationFactorSettingTags <a name="IdentityDomainsAuthenticationFactorSettingTags" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key IdentityDomainsAuthenticationFactorSetting#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key IdentityDomainsAuthenticationFactorSetting#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#value IdentityDomainsAuthenticationFactorSetting#value}.

---

### IdentityDomainsAuthenticationFactorSettingThirdPartyFactor <a name="IdentityDomainsAuthenticationFactorSettingThirdPartyFactor" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingThirdPartyFactor {
    object DuoSecurity
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.property.duoSecurity">DuoSecurity</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}. |

---

##### `DuoSecurity`<sup>Required</sup> <a name="DuoSecurity" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor.property.duoSecurity"></a>

```csharp
public object DuoSecurity { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security IdentityDomainsAuthenticationFactorSetting#duo_security}.

---

### IdentityDomainsAuthenticationFactorSettingTimeouts <a name="IdentityDomainsAuthenticationFactorSettingTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#create IdentityDomainsAuthenticationFactorSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#delete IdentityDomainsAuthenticationFactorSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#update IdentityDomainsAuthenticationFactorSetting#update}.

---

### IdentityDomainsAuthenticationFactorSettingTotpSettings <a name="IdentityDomainsAuthenticationFactorSettingTotpSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingTotpSettings {
    double EmailOtpValidityDurationInMins,
    double EmailPasscodeLength,
    string HashingAlgorithm,
    double JwtValidityDurationInSecs,
    double KeyRefreshIntervalInDays,
    double PasscodeLength,
    double SmsOtpValidityDurationInMins,
    double SmsPasscodeLength,
    double TimeStepInSecs,
    double TimeStepTolerance
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailOtpValidityDurationInMins">EmailOtpValidityDurationInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailPasscodeLength">EmailPasscodeLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.hashingAlgorithm">HashingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.jwtValidityDurationInSecs">JwtValidityDurationInSecs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.keyRefreshIntervalInDays">KeyRefreshIntervalInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.passcodeLength">PasscodeLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsOtpValidityDurationInMins">SmsOtpValidityDurationInMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsPasscodeLength">SmsPasscodeLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepInSecs">TimeStepInSecs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepTolerance">TimeStepTolerance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}. |

---

##### `EmailOtpValidityDurationInMins`<sup>Required</sup> <a name="EmailOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailOtpValidityDurationInMins"></a>

```csharp
public double EmailOtpValidityDurationInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#email_otp_validity_duration_in_mins}.

---

##### `EmailPasscodeLength`<sup>Required</sup> <a name="EmailPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.emailPasscodeLength"></a>

```csharp
public double EmailPasscodeLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#email_passcode_length IdentityDomainsAuthenticationFactorSetting#email_passcode_length}.

---

##### `HashingAlgorithm`<sup>Required</sup> <a name="HashingAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.hashingAlgorithm"></a>

```csharp
public string HashingAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#hashing_algorithm IdentityDomainsAuthenticationFactorSetting#hashing_algorithm}.

---

##### `JwtValidityDurationInSecs`<sup>Required</sup> <a name="JwtValidityDurationInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.jwtValidityDurationInSecs"></a>

```csharp
public double JwtValidityDurationInSecs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#jwt_validity_duration_in_secs IdentityDomainsAuthenticationFactorSetting#jwt_validity_duration_in_secs}.

---

##### `KeyRefreshIntervalInDays`<sup>Required</sup> <a name="KeyRefreshIntervalInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.keyRefreshIntervalInDays"></a>

```csharp
public double KeyRefreshIntervalInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#key_refresh_interval_in_days IdentityDomainsAuthenticationFactorSetting#key_refresh_interval_in_days}.

---

##### `PasscodeLength`<sup>Required</sup> <a name="PasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.passcodeLength"></a>

```csharp
public double PasscodeLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#passcode_length IdentityDomainsAuthenticationFactorSetting#passcode_length}.

---

##### `SmsOtpValidityDurationInMins`<sup>Required</sup> <a name="SmsOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsOtpValidityDurationInMins"></a>

```csharp
public double SmsOtpValidityDurationInMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_otp_validity_duration_in_mins IdentityDomainsAuthenticationFactorSetting#sms_otp_validity_duration_in_mins}.

---

##### `SmsPasscodeLength`<sup>Required</sup> <a name="SmsPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.smsPasscodeLength"></a>

```csharp
public double SmsPasscodeLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#sms_passcode_length IdentityDomainsAuthenticationFactorSetting#sms_passcode_length}.

---

##### `TimeStepInSecs`<sup>Required</sup> <a name="TimeStepInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepInSecs"></a>

```csharp
public double TimeStepInSecs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_in_secs IdentityDomainsAuthenticationFactorSetting#time_step_in_secs}.

---

##### `TimeStepTolerance`<sup>Required</sup> <a name="TimeStepTolerance" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings.property.timeStepTolerance"></a>

```csharp
public double TimeStepTolerance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#time_step_tolerance IdentityDomainsAuthenticationFactorSetting#time_step_tolerance}.

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings {
    string Attestation,
    string AuthenticatorSelectionAttachment,
    object AuthenticatorSelectionRequireResidentKey,
    string AuthenticatorSelectionResidentKey,
    string AuthenticatorSelectionUserVerification,
    object ExcludeCredentials,
    string[] PublicKeyTypes,
    double Timeout,
    double DomainValidationLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.attestation">Attestation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionAttachment">AuthenticatorSelectionAttachment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionRequireResidentKey">AuthenticatorSelectionRequireResidentKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionResidentKey">AuthenticatorSelectionResidentKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionUserVerification">AuthenticatorSelectionUserVerification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.excludeCredentials">ExcludeCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.publicKeyTypes">PublicKeyTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.domainValidationLevel">DomainValidationLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}. |

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.attestation"></a>

```csharp
public string Attestation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation IdentityDomainsAuthenticationFactorSetting#attestation}.

---

##### `AuthenticatorSelectionAttachment`<sup>Required</sup> <a name="AuthenticatorSelectionAttachment" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionAttachment"></a>

```csharp
public string AuthenticatorSelectionAttachment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_attachment IdentityDomainsAuthenticationFactorSetting#authenticator_selection_attachment}.

---

##### `AuthenticatorSelectionRequireResidentKey`<sup>Required</sup> <a name="AuthenticatorSelectionRequireResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionRequireResidentKey"></a>

```csharp
public object AuthenticatorSelectionRequireResidentKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_require_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_require_resident_key}.

---

##### `AuthenticatorSelectionResidentKey`<sup>Required</sup> <a name="AuthenticatorSelectionResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionResidentKey"></a>

```csharp
public string AuthenticatorSelectionResidentKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_resident_key IdentityDomainsAuthenticationFactorSetting#authenticator_selection_resident_key}.

---

##### `AuthenticatorSelectionUserVerification`<sup>Required</sup> <a name="AuthenticatorSelectionUserVerification" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.authenticatorSelectionUserVerification"></a>

```csharp
public string AuthenticatorSelectionUserVerification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#authenticator_selection_user_verification IdentityDomainsAuthenticationFactorSetting#authenticator_selection_user_verification}.

---

##### `ExcludeCredentials`<sup>Required</sup> <a name="ExcludeCredentials" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.excludeCredentials"></a>

```csharp
public object ExcludeCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#exclude_credentials IdentityDomainsAuthenticationFactorSetting#exclude_credentials}.

---

##### `PublicKeyTypes`<sup>Required</sup> <a name="PublicKeyTypes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.publicKeyTypes"></a>

```csharp
public string[] PublicKeyTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#public_key_types IdentityDomainsAuthenticationFactorSetting#public_key_types}.

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#timeout IdentityDomainsAuthenticationFactorSetting#timeout}.

---

##### `DomainValidationLevel`<sup>Optional</sup> <a name="DomainValidationLevel" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.property.domainValidationLevel"></a>

```csharp
public double DomainValidationLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#domain_validation_level IdentityDomainsAuthenticationFactorSetting#domain_validation_level}.

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings {
    IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings DuoSecuritySettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.property.duoSecuritySettings">DuoSecuritySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | duo_security_settings block. |

---

##### `DuoSecuritySettings`<sup>Optional</sup> <a name="DuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.property.duoSecuritySettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings DuoSecuritySettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

duo_security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#duo_security_settings IdentityDomainsAuthenticationFactorSetting#duo_security_settings}

---

### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings {
    string ApiHostname,
    string IntegrationKey,
    string SecretKey,
    string UserMappingAttribute,
    string AttestationKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.apiHostname">ApiHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.secretKey">SecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.userMappingAttribute">UserMappingAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.attestationKey">AttestationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}. |

---

##### `ApiHostname`<sup>Required</sup> <a name="ApiHostname" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.apiHostname"></a>

```csharp
public string ApiHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#api_hostname IdentityDomainsAuthenticationFactorSetting#api_hostname}.

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#integration_key IdentityDomainsAuthenticationFactorSetting#integration_key}.

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#secret_key IdentityDomainsAuthenticationFactorSetting#secret_key}.

---

##### `UserMappingAttribute`<sup>Required</sup> <a name="UserMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.userMappingAttribute"></a>

```csharp
public string UserMappingAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#user_mapping_attribute IdentityDomainsAuthenticationFactorSetting#user_mapping_attribute}.

---

##### `AttestationKey`<sup>Optional</sup> <a name="AttestationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.property.attestationKey"></a>

```csharp
public string AttestationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_authentication_factor_setting#attestation_key IdentityDomainsAuthenticationFactorSetting#attestation_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMinsInput">HelpDeskCodeExpiryInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabledInput">HelpDeskGenerationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsageInput">HelpDeskMaxUsageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.lengthInput">LengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActiveInput">MaxActiveInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabledInput">SelfServiceGenerationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins">HelpDeskCodeExpiryInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled">HelpDeskGenerationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage">HelpDeskMaxUsage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive">MaxActive</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled">SelfServiceGenerationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HelpDeskCodeExpiryInMinsInput`<sup>Optional</sup> <a name="HelpDeskCodeExpiryInMinsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMinsInput"></a>

```csharp
public double HelpDeskCodeExpiryInMinsInput { get; }
```

- *Type:* double

---

##### `HelpDeskGenerationEnabledInput`<sup>Optional</sup> <a name="HelpDeskGenerationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabledInput"></a>

```csharp
public object HelpDeskGenerationEnabledInput { get; }
```

- *Type:* object

---

##### `HelpDeskMaxUsageInput`<sup>Optional</sup> <a name="HelpDeskMaxUsageInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsageInput"></a>

```csharp
public double HelpDeskMaxUsageInput { get; }
```

- *Type:* double

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.lengthInput"></a>

```csharp
public double LengthInput { get; }
```

- *Type:* double

---

##### `MaxActiveInput`<sup>Optional</sup> <a name="MaxActiveInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActiveInput"></a>

```csharp
public double MaxActiveInput { get; }
```

- *Type:* double

---

##### `SelfServiceGenerationEnabledInput`<sup>Optional</sup> <a name="SelfServiceGenerationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabledInput"></a>

```csharp
public object SelfServiceGenerationEnabledInput { get; }
```

- *Type:* object

---

##### `HelpDeskCodeExpiryInMins`<sup>Required</sup> <a name="HelpDeskCodeExpiryInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins"></a>

```csharp
public double HelpDeskCodeExpiryInMins { get; }
```

- *Type:* double

---

##### `HelpDeskGenerationEnabled`<sup>Required</sup> <a name="HelpDeskGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled"></a>

```csharp
public object HelpDeskGenerationEnabled { get; }
```

- *Type:* object

---

##### `HelpDeskMaxUsage`<sup>Required</sup> <a name="HelpDeskMaxUsage" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage"></a>

```csharp
public double HelpDeskMaxUsage { get; }
```

- *Type:* double

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `MaxActive`<sup>Required</sup> <a name="MaxActive" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive"></a>

```csharp
public double MaxActive { get; }
```

- *Type:* double

---

##### `SelfServiceGenerationEnabled`<sup>Required</sup> <a name="SelfServiceGenerationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled"></a>

```csharp
public object SelfServiceGenerationEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingBypassCodeSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingBypassCodeSettings">IdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicyInput">DeviceProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecsInput">InitialLockoutPeriodInSecsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLengthInput">KeyPairLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPatternInput">LockoutEscalationPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockoutInput">MaxFailuresBeforeLockoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarningInput">MaxFailuresBeforeWarningInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecsInput">MaxLockoutIntervalInSecsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLengthInput">MinPinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDaysInput">PolicyUpdateFreqInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgoInput">RequestSigningAlgoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncodingInput">SharedSecretEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabledInput">UnlockAppForEachRequestEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecsInput">UnlockAppIntervalInSecsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabledInput">UnlockOnAppForegroundEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabledInput">UnlockOnAppStartEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy">DeviceProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs">InitialLockoutPeriodInSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength">KeyPairLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern">LockoutEscalationPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout">MaxFailuresBeforeLockout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning">MaxFailuresBeforeWarning</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs">MaxLockoutIntervalInSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength">MinPinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays">PolicyUpdateFreqInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo">RequestSigningAlgo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding">SharedSecretEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled">UnlockAppForEachRequestEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs">UnlockAppIntervalInSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled">UnlockOnAppForegroundEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled">UnlockOnAppStartEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceProtectionPolicyInput`<sup>Optional</sup> <a name="DeviceProtectionPolicyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicyInput"></a>

```csharp
public string DeviceProtectionPolicyInput { get; }
```

- *Type:* string

---

##### `InitialLockoutPeriodInSecsInput`<sup>Optional</sup> <a name="InitialLockoutPeriodInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecsInput"></a>

```csharp
public double InitialLockoutPeriodInSecsInput { get; }
```

- *Type:* double

---

##### `KeyPairLengthInput`<sup>Optional</sup> <a name="KeyPairLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLengthInput"></a>

```csharp
public double KeyPairLengthInput { get; }
```

- *Type:* double

---

##### `LockoutEscalationPatternInput`<sup>Optional</sup> <a name="LockoutEscalationPatternInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPatternInput"></a>

```csharp
public string LockoutEscalationPatternInput { get; }
```

- *Type:* string

---

##### `MaxFailuresBeforeLockoutInput`<sup>Optional</sup> <a name="MaxFailuresBeforeLockoutInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockoutInput"></a>

```csharp
public double MaxFailuresBeforeLockoutInput { get; }
```

- *Type:* double

---

##### `MaxFailuresBeforeWarningInput`<sup>Optional</sup> <a name="MaxFailuresBeforeWarningInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarningInput"></a>

```csharp
public double MaxFailuresBeforeWarningInput { get; }
```

- *Type:* double

---

##### `MaxLockoutIntervalInSecsInput`<sup>Optional</sup> <a name="MaxLockoutIntervalInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecsInput"></a>

```csharp
public double MaxLockoutIntervalInSecsInput { get; }
```

- *Type:* double

---

##### `MinPinLengthInput`<sup>Optional</sup> <a name="MinPinLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLengthInput"></a>

```csharp
public double MinPinLengthInput { get; }
```

- *Type:* double

---

##### `PolicyUpdateFreqInDaysInput`<sup>Optional</sup> <a name="PolicyUpdateFreqInDaysInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDaysInput"></a>

```csharp
public double PolicyUpdateFreqInDaysInput { get; }
```

- *Type:* double

---

##### `RequestSigningAlgoInput`<sup>Optional</sup> <a name="RequestSigningAlgoInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgoInput"></a>

```csharp
public string RequestSigningAlgoInput { get; }
```

- *Type:* string

---

##### `SharedSecretEncodingInput`<sup>Optional</sup> <a name="SharedSecretEncodingInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncodingInput"></a>

```csharp
public string SharedSecretEncodingInput { get; }
```

- *Type:* string

---

##### `UnlockAppForEachRequestEnabledInput`<sup>Optional</sup> <a name="UnlockAppForEachRequestEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabledInput"></a>

```csharp
public object UnlockAppForEachRequestEnabledInput { get; }
```

- *Type:* object

---

##### `UnlockAppIntervalInSecsInput`<sup>Optional</sup> <a name="UnlockAppIntervalInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecsInput"></a>

```csharp
public double UnlockAppIntervalInSecsInput { get; }
```

- *Type:* double

---

##### `UnlockOnAppForegroundEnabledInput`<sup>Optional</sup> <a name="UnlockOnAppForegroundEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabledInput"></a>

```csharp
public object UnlockOnAppForegroundEnabledInput { get; }
```

- *Type:* object

---

##### `UnlockOnAppStartEnabledInput`<sup>Optional</sup> <a name="UnlockOnAppStartEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabledInput"></a>

```csharp
public object UnlockOnAppStartEnabledInput { get; }
```

- *Type:* object

---

##### `DeviceProtectionPolicy`<sup>Required</sup> <a name="DeviceProtectionPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy"></a>

```csharp
public string DeviceProtectionPolicy { get; }
```

- *Type:* string

---

##### `InitialLockoutPeriodInSecs`<sup>Required</sup> <a name="InitialLockoutPeriodInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs"></a>

```csharp
public double InitialLockoutPeriodInSecs { get; }
```

- *Type:* double

---

##### `KeyPairLength`<sup>Required</sup> <a name="KeyPairLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength"></a>

```csharp
public double KeyPairLength { get; }
```

- *Type:* double

---

##### `LockoutEscalationPattern`<sup>Required</sup> <a name="LockoutEscalationPattern" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern"></a>

```csharp
public string LockoutEscalationPattern { get; }
```

- *Type:* string

---

##### `MaxFailuresBeforeLockout`<sup>Required</sup> <a name="MaxFailuresBeforeLockout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout"></a>

```csharp
public double MaxFailuresBeforeLockout { get; }
```

- *Type:* double

---

##### `MaxFailuresBeforeWarning`<sup>Required</sup> <a name="MaxFailuresBeforeWarning" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning"></a>

```csharp
public double MaxFailuresBeforeWarning { get; }
```

- *Type:* double

---

##### `MaxLockoutIntervalInSecs`<sup>Required</sup> <a name="MaxLockoutIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs"></a>

```csharp
public double MaxLockoutIntervalInSecs { get; }
```

- *Type:* double

---

##### `MinPinLength`<sup>Required</sup> <a name="MinPinLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength"></a>

```csharp
public double MinPinLength { get; }
```

- *Type:* double

---

##### `PolicyUpdateFreqInDays`<sup>Required</sup> <a name="PolicyUpdateFreqInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays"></a>

```csharp
public double PolicyUpdateFreqInDays { get; }
```

- *Type:* double

---

##### `RequestSigningAlgo`<sup>Required</sup> <a name="RequestSigningAlgo" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo"></a>

```csharp
public string RequestSigningAlgo { get; }
```

- *Type:* string

---

##### `SharedSecretEncoding`<sup>Required</sup> <a name="SharedSecretEncoding" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding"></a>

```csharp
public string SharedSecretEncoding { get; }
```

- *Type:* string

---

##### `UnlockAppForEachRequestEnabled`<sup>Required</sup> <a name="UnlockAppForEachRequestEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled"></a>

```csharp
public object UnlockAppForEachRequestEnabled { get; }
```

- *Type:* object

---

##### `UnlockAppIntervalInSecs`<sup>Required</sup> <a name="UnlockAppIntervalInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs"></a>

```csharp
public double UnlockAppIntervalInSecs { get; }
```

- *Type:* double

---

##### `UnlockOnAppForegroundEnabled`<sup>Required</sup> <a name="UnlockOnAppForegroundEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled"></a>

```csharp
public object UnlockOnAppForegroundEnabled { get; }
```

- *Type:* object

---

##### `UnlockOnAppStartEnabled`<sup>Required</sup> <a name="UnlockOnAppStartEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled"></a>

```csharp
public object UnlockOnAppStartEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingClientAppSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingClientAppSettings">IdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingCompliancePolicyList <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicyList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingCompliancePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get"></a>

```csharp
private IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference <a name="IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resetEmailLinkCustomUrl">ResetEmailLinkCustomUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailLinkCustomUrl` <a name="ResetEmailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resetEmailLinkCustomUrl"></a>

```csharp
private void ResetEmailLinkCustomUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrlInput">EmailLinkCustomUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabledInput">EmailLinkEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl">EmailLinkCustomUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled">EmailLinkEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailLinkCustomUrlInput`<sup>Optional</sup> <a name="EmailLinkCustomUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrlInput"></a>

```csharp
public string EmailLinkCustomUrlInput { get; }
```

- *Type:* string

---

##### `EmailLinkEnabledInput`<sup>Optional</sup> <a name="EmailLinkEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabledInput"></a>

```csharp
public object EmailLinkEnabledInput { get; }
```

- *Type:* object

---

##### `EmailLinkCustomUrl`<sup>Required</sup> <a name="EmailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl"></a>

```csharp
public string EmailLinkCustomUrl { get; }
```

- *Type:* string

---

##### `EmailLinkEnabled`<sup>Required</sup> <a name="EmailLinkEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled"></a>

```csharp
public object EmailLinkEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEmailSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEmailSettings">IdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDaysInput">MaxEndpointTrustDurationInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevicesInput">MaxEnrolledDevicesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttemptsInput">MaxIncorrectAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpointsInput">MaxTrustedEndpointsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabledInput">TrustedEndpointsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays">MaxEndpointTrustDurationInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices">MaxEnrolledDevices</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints">MaxTrustedEndpoints</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled">TrustedEndpointsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxEndpointTrustDurationInDaysInput`<sup>Optional</sup> <a name="MaxEndpointTrustDurationInDaysInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDaysInput"></a>

```csharp
public double MaxEndpointTrustDurationInDaysInput { get; }
```

- *Type:* double

---

##### `MaxEnrolledDevicesInput`<sup>Optional</sup> <a name="MaxEnrolledDevicesInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevicesInput"></a>

```csharp
public double MaxEnrolledDevicesInput { get; }
```

- *Type:* double

---

##### `MaxIncorrectAttemptsInput`<sup>Optional</sup> <a name="MaxIncorrectAttemptsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttemptsInput"></a>

```csharp
public double MaxIncorrectAttemptsInput { get; }
```

- *Type:* double

---

##### `MaxTrustedEndpointsInput`<sup>Optional</sup> <a name="MaxTrustedEndpointsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpointsInput"></a>

```csharp
public double MaxTrustedEndpointsInput { get; }
```

- *Type:* double

---

##### `TrustedEndpointsEnabledInput`<sup>Optional</sup> <a name="TrustedEndpointsEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabledInput"></a>

```csharp
public object TrustedEndpointsEnabledInput { get; }
```

- *Type:* object

---

##### `MaxEndpointTrustDurationInDays`<sup>Required</sup> <a name="MaxEndpointTrustDurationInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays"></a>

```csharp
public double MaxEndpointTrustDurationInDays { get; }
```

- *Type:* double

---

##### `MaxEnrolledDevices`<sup>Required</sup> <a name="MaxEnrolledDevices" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices"></a>

```csharp
public double MaxEnrolledDevices { get; }
```

- *Type:* double

---

##### `MaxIncorrectAttempts`<sup>Required</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts"></a>

```csharp
public double MaxIncorrectAttempts { get; }
```

- *Type:* double

---

##### `MaxTrustedEndpoints`<sup>Required</sup> <a name="MaxTrustedEndpoints" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints"></a>

```csharp
public double MaxTrustedEndpoints { get; }
```

- *Type:* double

---

##### `TrustedEndpointsEnabled`<sup>Required</sup> <a name="TrustedEndpointsEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled"></a>

```csharp
public object TrustedEndpointsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingEndpointRestrictions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingEndpointRestrictions">IdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---


### IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">IdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a>

---


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">IdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a>

---


### IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberEnabled">ResetMobileNumberEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberUpdateEnabled">ResetMobileNumberUpdateEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMobileNumberEnabled` <a name="ResetMobileNumberEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberEnabled"></a>

```csharp
private void ResetMobileNumberEnabled()
```

##### `ResetMobileNumberUpdateEnabled` <a name="ResetMobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resetMobileNumberUpdateEnabled"></a>

```csharp
private void ResetMobileNumberUpdateEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabledInput">MobileNumberEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabledInput">MobileNumberUpdateEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled">MobileNumberEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled">MobileNumberUpdateEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MobileNumberEnabledInput`<sup>Optional</sup> <a name="MobileNumberEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabledInput"></a>

```csharp
public object MobileNumberEnabledInput { get; }
```

- *Type:* object

---

##### `MobileNumberUpdateEnabledInput`<sup>Optional</sup> <a name="MobileNumberUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabledInput"></a>

```csharp
public object MobileNumberUpdateEnabledInput { get; }
```

- *Type:* object

---

##### `MobileNumberEnabled`<sup>Required</sup> <a name="MobileNumberEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled"></a>

```csharp
public object MobileNumberEnabled { get; }
```

- *Type:* object

---

##### `MobileNumberUpdateEnabled`<sup>Required</sup> <a name="MobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled"></a>

```csharp
public object MobileNumberUpdateEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">IdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingMetaList <a name="IdentityDomainsAuthenticationFactorSettingMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get"></a>

```csharp
private IdentityDomainsAuthenticationFactorSettingMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsAuthenticationFactorSettingMetaOutputReference <a name="IdentityDomainsAuthenticationFactorSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta">IdentityDomainsAuthenticationFactorSettingMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingMeta">IdentityDomainsAuthenticationFactorSettingMeta</a>

---


### IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabledInput">PullEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled">PullEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PullEnabledInput`<sup>Optional</sup> <a name="PullEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabledInput"></a>

```csharp
public object PullEnabledInput { get; }
```

- *Type:* object

---

##### `PullEnabled`<sup>Required</sup> <a name="PullEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled"></a>

```csharp
public object PullEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingNotificationSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingNotificationSettings">IdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingTagsList <a name="IdentityDomainsAuthenticationFactorSettingTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get"></a>

```csharp
private IdentityDomainsAuthenticationFactorSettingTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsAuthenticationFactorSettingTagsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference <a name="IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurityInput">DuoSecurityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity">DuoSecurity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DuoSecurityInput`<sup>Optional</sup> <a name="DuoSecurityInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurityInput"></a>

```csharp
public object DuoSecurityInput { get; }
```

- *Type:* object

---

##### `DuoSecurity`<sup>Required</sup> <a name="DuoSecurity" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity"></a>

```csharp
public object DuoSecurity { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingThirdPartyFactor InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingThirdPartyFactor">IdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---


### IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMinsInput">EmailOtpValidityDurationInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLengthInput">EmailPasscodeLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithmInput">HashingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecsInput">JwtValidityDurationInSecsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDaysInput">KeyRefreshIntervalInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLengthInput">PasscodeLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMinsInput">SmsOtpValidityDurationInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLengthInput">SmsPasscodeLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecsInput">TimeStepInSecsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepToleranceInput">TimeStepToleranceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins">EmailOtpValidityDurationInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength">EmailPasscodeLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm">HashingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs">JwtValidityDurationInSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays">KeyRefreshIntervalInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength">PasscodeLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins">SmsOtpValidityDurationInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength">SmsPasscodeLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs">TimeStepInSecs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance">TimeStepTolerance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailOtpValidityDurationInMinsInput`<sup>Optional</sup> <a name="EmailOtpValidityDurationInMinsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMinsInput"></a>

```csharp
public double EmailOtpValidityDurationInMinsInput { get; }
```

- *Type:* double

---

##### `EmailPasscodeLengthInput`<sup>Optional</sup> <a name="EmailPasscodeLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLengthInput"></a>

```csharp
public double EmailPasscodeLengthInput { get; }
```

- *Type:* double

---

##### `HashingAlgorithmInput`<sup>Optional</sup> <a name="HashingAlgorithmInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithmInput"></a>

```csharp
public string HashingAlgorithmInput { get; }
```

- *Type:* string

---

##### `JwtValidityDurationInSecsInput`<sup>Optional</sup> <a name="JwtValidityDurationInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecsInput"></a>

```csharp
public double JwtValidityDurationInSecsInput { get; }
```

- *Type:* double

---

##### `KeyRefreshIntervalInDaysInput`<sup>Optional</sup> <a name="KeyRefreshIntervalInDaysInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDaysInput"></a>

```csharp
public double KeyRefreshIntervalInDaysInput { get; }
```

- *Type:* double

---

##### `PasscodeLengthInput`<sup>Optional</sup> <a name="PasscodeLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLengthInput"></a>

```csharp
public double PasscodeLengthInput { get; }
```

- *Type:* double

---

##### `SmsOtpValidityDurationInMinsInput`<sup>Optional</sup> <a name="SmsOtpValidityDurationInMinsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMinsInput"></a>

```csharp
public double SmsOtpValidityDurationInMinsInput { get; }
```

- *Type:* double

---

##### `SmsPasscodeLengthInput`<sup>Optional</sup> <a name="SmsPasscodeLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLengthInput"></a>

```csharp
public double SmsPasscodeLengthInput { get; }
```

- *Type:* double

---

##### `TimeStepInSecsInput`<sup>Optional</sup> <a name="TimeStepInSecsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecsInput"></a>

```csharp
public double TimeStepInSecsInput { get; }
```

- *Type:* double

---

##### `TimeStepToleranceInput`<sup>Optional</sup> <a name="TimeStepToleranceInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepToleranceInput"></a>

```csharp
public double TimeStepToleranceInput { get; }
```

- *Type:* double

---

##### `EmailOtpValidityDurationInMins`<sup>Required</sup> <a name="EmailOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins"></a>

```csharp
public double EmailOtpValidityDurationInMins { get; }
```

- *Type:* double

---

##### `EmailPasscodeLength`<sup>Required</sup> <a name="EmailPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength"></a>

```csharp
public double EmailPasscodeLength { get; }
```

- *Type:* double

---

##### `HashingAlgorithm`<sup>Required</sup> <a name="HashingAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm"></a>

```csharp
public string HashingAlgorithm { get; }
```

- *Type:* string

---

##### `JwtValidityDurationInSecs`<sup>Required</sup> <a name="JwtValidityDurationInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs"></a>

```csharp
public double JwtValidityDurationInSecs { get; }
```

- *Type:* double

---

##### `KeyRefreshIntervalInDays`<sup>Required</sup> <a name="KeyRefreshIntervalInDays" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays"></a>

```csharp
public double KeyRefreshIntervalInDays { get; }
```

- *Type:* double

---

##### `PasscodeLength`<sup>Required</sup> <a name="PasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength"></a>

```csharp
public double PasscodeLength { get; }
```

- *Type:* double

---

##### `SmsOtpValidityDurationInMins`<sup>Required</sup> <a name="SmsOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins"></a>

```csharp
public double SmsOtpValidityDurationInMins { get; }
```

- *Type:* double

---

##### `SmsPasscodeLength`<sup>Required</sup> <a name="SmsPasscodeLength" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength"></a>

```csharp
public double SmsPasscodeLength { get; }
```

- *Type:* double

---

##### `TimeStepInSecs`<sup>Required</sup> <a name="TimeStepInSecs" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs"></a>

```csharp
public double TimeStepInSecs { get; }
```

- *Type:* double

---

##### `TimeStepTolerance`<sup>Required</sup> <a name="TimeStepTolerance" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance"></a>

```csharp
public double TimeStepTolerance { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingTotpSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingTotpSettings">IdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resetDomainValidationLevel">ResetDomainValidationLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainValidationLevel` <a name="ResetDomainValidationLevel" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resetDomainValidationLevel"></a>

```csharp
private void ResetDomainValidationLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestationInput">AttestationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachmentInput">AuthenticatorSelectionAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKeyInput">AuthenticatorSelectionRequireResidentKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKeyInput">AuthenticatorSelectionResidentKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerificationInput">AuthenticatorSelectionUserVerificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevelInput">DomainValidationLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentialsInput">ExcludeCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypesInput">PublicKeyTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation">Attestation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment">AuthenticatorSelectionAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey">AuthenticatorSelectionRequireResidentKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey">AuthenticatorSelectionResidentKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification">AuthenticatorSelectionUserVerification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel">DomainValidationLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials">ExcludeCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes">PublicKeyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttestationInput`<sup>Optional</sup> <a name="AttestationInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestationInput"></a>

```csharp
public string AttestationInput { get; }
```

- *Type:* string

---

##### `AuthenticatorSelectionAttachmentInput`<sup>Optional</sup> <a name="AuthenticatorSelectionAttachmentInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachmentInput"></a>

```csharp
public string AuthenticatorSelectionAttachmentInput { get; }
```

- *Type:* string

---

##### `AuthenticatorSelectionRequireResidentKeyInput`<sup>Optional</sup> <a name="AuthenticatorSelectionRequireResidentKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKeyInput"></a>

```csharp
public object AuthenticatorSelectionRequireResidentKeyInput { get; }
```

- *Type:* object

---

##### `AuthenticatorSelectionResidentKeyInput`<sup>Optional</sup> <a name="AuthenticatorSelectionResidentKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKeyInput"></a>

```csharp
public string AuthenticatorSelectionResidentKeyInput { get; }
```

- *Type:* string

---

##### `AuthenticatorSelectionUserVerificationInput`<sup>Optional</sup> <a name="AuthenticatorSelectionUserVerificationInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerificationInput"></a>

```csharp
public string AuthenticatorSelectionUserVerificationInput { get; }
```

- *Type:* string

---

##### `DomainValidationLevelInput`<sup>Optional</sup> <a name="DomainValidationLevelInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevelInput"></a>

```csharp
public double DomainValidationLevelInput { get; }
```

- *Type:* double

---

##### `ExcludeCredentialsInput`<sup>Optional</sup> <a name="ExcludeCredentialsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentialsInput"></a>

```csharp
public object ExcludeCredentialsInput { get; }
```

- *Type:* object

---

##### `PublicKeyTypesInput`<sup>Optional</sup> <a name="PublicKeyTypesInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypesInput"></a>

```csharp
public string[] PublicKeyTypesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation"></a>

```csharp
public string Attestation { get; }
```

- *Type:* string

---

##### `AuthenticatorSelectionAttachment`<sup>Required</sup> <a name="AuthenticatorSelectionAttachment" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment"></a>

```csharp
public string AuthenticatorSelectionAttachment { get; }
```

- *Type:* string

---

##### `AuthenticatorSelectionRequireResidentKey`<sup>Required</sup> <a name="AuthenticatorSelectionRequireResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey"></a>

```csharp
public object AuthenticatorSelectionRequireResidentKey { get; }
```

- *Type:* object

---

##### `AuthenticatorSelectionResidentKey`<sup>Required</sup> <a name="AuthenticatorSelectionResidentKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey"></a>

```csharp
public string AuthenticatorSelectionResidentKey { get; }
```

- *Type:* string

---

##### `AuthenticatorSelectionUserVerification`<sup>Required</sup> <a name="AuthenticatorSelectionUserVerification" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification"></a>

```csharp
public string AuthenticatorSelectionUserVerification { get; }
```

- *Type:* string

---

##### `DomainValidationLevel`<sup>Required</sup> <a name="DomainValidationLevel" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel"></a>

```csharp
public double DomainValidationLevel { get; }
```

- *Type:* double

---

##### `ExcludeCredentials`<sup>Required</sup> <a name="ExcludeCredentials" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials"></a>

```csharp
public object ExcludeCredentials { get; }
```

- *Type:* object

---

##### `PublicKeyTypes`<sup>Required</sup> <a name="PublicKeyTypes" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes"></a>

```csharp
public string[] PublicKeyTypes { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resetAttestationKey">ResetAttestationKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttestationKey` <a name="ResetAttestationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resetAttestationKey"></a>

```csharp
private void ResetAttestationKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostnameInput">ApiHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKeyInput">AttestationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKeyInput">IntegrationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttributeInput">UserMappingAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname">ApiHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey">AttestationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey">IntegrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute">UserMappingAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiHostnameInput`<sup>Optional</sup> <a name="ApiHostnameInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostnameInput"></a>

```csharp
public string ApiHostnameInput { get; }
```

- *Type:* string

---

##### `AttestationKeyInput`<sup>Optional</sup> <a name="AttestationKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKeyInput"></a>

```csharp
public string AttestationKeyInput { get; }
```

- *Type:* string

---

##### `IntegrationKeyInput`<sup>Optional</sup> <a name="IntegrationKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKeyInput"></a>

```csharp
public string IntegrationKeyInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `UserMappingAttributeInput`<sup>Optional</sup> <a name="UserMappingAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttributeInput"></a>

```csharp
public string UserMappingAttributeInput { get; }
```

- *Type:* string

---

##### `ApiHostname`<sup>Required</sup> <a name="ApiHostname" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname"></a>

```csharp
public string ApiHostname { get; }
```

- *Type:* string

---

##### `AttestationKey`<sup>Required</sup> <a name="AttestationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey"></a>

```csharp
public string AttestationKey { get; }
```

- *Type:* string

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey"></a>

```csharp
public string IntegrationKey { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `UserMappingAttribute`<sup>Required</sup> <a name="UserMappingAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute"></a>

```csharp
public string UserMappingAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---


### IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference <a name="IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings">PutDuoSecuritySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resetDuoSecuritySettings">ResetDuoSecuritySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuoSecuritySettings` <a name="PutDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings"></a>

```csharp
private void PutDuoSecuritySettings(IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.putDuoSecuritySettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---

##### `ResetDuoSecuritySettings` <a name="ResetDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resetDuoSecuritySettings"></a>

```csharp
private void ResetDuoSecuritySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings">DuoSecuritySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettingsInput">DuoSecuritySettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DuoSecuritySettings`<sup>Required</sup> <a name="DuoSecuritySettings" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference DuoSecuritySettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference</a>

---

##### `DuoSecuritySettingsInput`<sup>Optional</sup> <a name="DuoSecuritySettingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettingsInput"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings DuoSecuritySettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsAuthenticationFactorSetting.IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">IdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---



