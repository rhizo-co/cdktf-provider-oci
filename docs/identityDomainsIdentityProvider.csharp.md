# `identityDomainsIdentityProvider` Submodule <a name="`identityDomainsIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsIdentityProvider <a name="IdentityDomainsIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider oci_identity_domains_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProvider(Construct Scope, string Id, IdentityDomainsIdentityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig">IdentityDomainsIdentityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig">IdentityDomainsIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy">PutCorrelationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups">PutJitUserProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes">PutJitUserProvAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings">PutJitUserProvGroupMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">PutUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">PutUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAssertionAttribute">ResetAssertionAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthnRequestBinding">ResetAuthnRequestBinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetCorrelationPolicy">ResetCorrelationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetEncryptionCertificate">ResetEncryptionCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIconUrl">ResetIconUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIdpSsoUrl">ResetIdpSsoUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIncludeSigningCertInSignature">ResetIncludeSigningCertInSignature</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAssignedGroups">ResetJitUserProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributes">ResetJitUserProvAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributeUpdateEnabled">ResetJitUserProvAttributeUpdateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvCreateUserEnabled">ResetJitUserProvCreateUserEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvEnabled">ResetJitUserProvEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssertionAttributeEnabled">ResetJitUserProvGroupAssertionAttributeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssignmentMethod">ResetJitUserProvGroupAssignmentMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappingMode">ResetJitUserProvGroupMappingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappings">ResetJitUserProvGroupMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupSamlAttributeName">ResetJitUserProvGroupSamlAttributeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupStaticListEnabled">ResetJitUserProvGroupStaticListEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvIgnoreErrorOnAbsentGroups">ResetJitUserProvIgnoreErrorOnAbsentGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutBinding">ResetLogoutBinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutEnabled">ResetLogoutEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutRequestUrl">ResetLogoutRequestUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutResponseUrl">ResetLogoutResponseUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetNameIdFormat">ResetNameIdFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOcid">ResetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetPartnerProviderId">ResetPartnerProviderId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequestedAuthenticationContext">ResetRequestedAuthenticationContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequireForceAuthn">ResetRequireForceAuthn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequiresEncryptedAssertion">ResetRequiresEncryptedAssertion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSamlHoKrequired">ResetSamlHoKrequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetServiceInstanceIdentifier">ResetServiceInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetShownOnLoginPage">ResetShownOnLoginPage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSignatureHashAlgorithm">ResetSignatureHashAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSigningCertificate">ResetSigningCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSuccinctId">ResetSuccinctId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">ResetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">ResetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingMethod">ResetUserMappingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingStoreAttribute">ResetUserMappingStoreAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorrelationPolicy` <a name="PutCorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy"></a>

```csharp
private void PutCorrelationPolicy(IdentityDomainsIdentityProviderCorrelationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putCorrelationPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---

##### `PutJitUserProvAssignedGroups` <a name="PutJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups"></a>

```csharp
private void PutJitUserProvAssignedGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAssignedGroups.parameter.value"></a>

- *Type:* object

---

##### `PutJitUserProvAttributes` <a name="PutJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes"></a>

```csharp
private void PutJitUserProvAttributes(IdentityDomainsIdentityProviderJitUserProvAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvAttributes.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---

##### `PutJitUserProvGroupMappings` <a name="PutJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings"></a>

```csharp
private void PutJitUserProvGroupMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putJitUserProvGroupMappings.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityDomainsIdentityProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

---

##### `PutUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider` <a name="PutUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```csharp
private void PutUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---

##### `PutUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider` <a name="PutUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```csharp
private void PutUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider(IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.putUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---

##### `ResetAssertionAttribute` <a name="ResetAssertionAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAssertionAttribute"></a>

```csharp
private void ResetAssertionAttribute()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthnRequestBinding` <a name="ResetAuthnRequestBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthnRequestBinding"></a>

```csharp
private void ResetAuthnRequestBinding()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetCorrelationPolicy` <a name="ResetCorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetCorrelationPolicy"></a>

```csharp
private void ResetCorrelationPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionCertificate` <a name="ResetEncryptionCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetEncryptionCertificate"></a>

```csharp
private void ResetEncryptionCertificate()
```

##### `ResetExternalId` <a name="ResetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetIconUrl` <a name="ResetIconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIconUrl"></a>

```csharp
private void ResetIconUrl()
```

##### `ResetIdpSsoUrl` <a name="ResetIdpSsoUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIdpSsoUrl"></a>

```csharp
private void ResetIdpSsoUrl()
```

##### `ResetIncludeSigningCertInSignature` <a name="ResetIncludeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetIncludeSigningCertInSignature"></a>

```csharp
private void ResetIncludeSigningCertInSignature()
```

##### `ResetJitUserProvAssignedGroups` <a name="ResetJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAssignedGroups"></a>

```csharp
private void ResetJitUserProvAssignedGroups()
```

##### `ResetJitUserProvAttributes` <a name="ResetJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributes"></a>

```csharp
private void ResetJitUserProvAttributes()
```

##### `ResetJitUserProvAttributeUpdateEnabled` <a name="ResetJitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvAttributeUpdateEnabled"></a>

```csharp
private void ResetJitUserProvAttributeUpdateEnabled()
```

##### `ResetJitUserProvCreateUserEnabled` <a name="ResetJitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvCreateUserEnabled"></a>

```csharp
private void ResetJitUserProvCreateUserEnabled()
```

##### `ResetJitUserProvEnabled` <a name="ResetJitUserProvEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvEnabled"></a>

```csharp
private void ResetJitUserProvEnabled()
```

##### `ResetJitUserProvGroupAssertionAttributeEnabled` <a name="ResetJitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssertionAttributeEnabled"></a>

```csharp
private void ResetJitUserProvGroupAssertionAttributeEnabled()
```

##### `ResetJitUserProvGroupAssignmentMethod` <a name="ResetJitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupAssignmentMethod"></a>

```csharp
private void ResetJitUserProvGroupAssignmentMethod()
```

##### `ResetJitUserProvGroupMappingMode` <a name="ResetJitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappingMode"></a>

```csharp
private void ResetJitUserProvGroupMappingMode()
```

##### `ResetJitUserProvGroupMappings` <a name="ResetJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupMappings"></a>

```csharp
private void ResetJitUserProvGroupMappings()
```

##### `ResetJitUserProvGroupSamlAttributeName` <a name="ResetJitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupSamlAttributeName"></a>

```csharp
private void ResetJitUserProvGroupSamlAttributeName()
```

##### `ResetJitUserProvGroupStaticListEnabled` <a name="ResetJitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvGroupStaticListEnabled"></a>

```csharp
private void ResetJitUserProvGroupStaticListEnabled()
```

##### `ResetJitUserProvIgnoreErrorOnAbsentGroups` <a name="ResetJitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetJitUserProvIgnoreErrorOnAbsentGroups"></a>

```csharp
private void ResetJitUserProvIgnoreErrorOnAbsentGroups()
```

##### `ResetLogoutBinding` <a name="ResetLogoutBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutBinding"></a>

```csharp
private void ResetLogoutBinding()
```

##### `ResetLogoutEnabled` <a name="ResetLogoutEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutEnabled"></a>

```csharp
private void ResetLogoutEnabled()
```

##### `ResetLogoutRequestUrl` <a name="ResetLogoutRequestUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutRequestUrl"></a>

```csharp
private void ResetLogoutRequestUrl()
```

##### `ResetLogoutResponseUrl` <a name="ResetLogoutResponseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetLogoutResponseUrl"></a>

```csharp
private void ResetLogoutResponseUrl()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNameIdFormat` <a name="ResetNameIdFormat" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetNameIdFormat"></a>

```csharp
private void ResetNameIdFormat()
```

##### `ResetOcid` <a name="ResetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetOcid"></a>

```csharp
private void ResetOcid()
```

##### `ResetPartnerProviderId` <a name="ResetPartnerProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetPartnerProviderId"></a>

```csharp
private void ResetPartnerProviderId()
```

##### `ResetRequestedAuthenticationContext` <a name="ResetRequestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequestedAuthenticationContext"></a>

```csharp
private void ResetRequestedAuthenticationContext()
```

##### `ResetRequireForceAuthn` <a name="ResetRequireForceAuthn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequireForceAuthn"></a>

```csharp
private void ResetRequireForceAuthn()
```

##### `ResetRequiresEncryptedAssertion` <a name="ResetRequiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetRequiresEncryptedAssertion"></a>

```csharp
private void ResetRequiresEncryptedAssertion()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetSamlHoKrequired` <a name="ResetSamlHoKrequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSamlHoKrequired"></a>

```csharp
private void ResetSamlHoKrequired()
```

##### `ResetServiceInstanceIdentifier` <a name="ResetServiceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetServiceInstanceIdentifier"></a>

```csharp
private void ResetServiceInstanceIdentifier()
```

##### `ResetShownOnLoginPage` <a name="ResetShownOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetShownOnLoginPage"></a>

```csharp
private void ResetShownOnLoginPage()
```

##### `ResetSignatureHashAlgorithm` <a name="ResetSignatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSignatureHashAlgorithm"></a>

```csharp
private void ResetSignatureHashAlgorithm()
```

##### `ResetSigningCertificate` <a name="ResetSigningCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSigningCertificate"></a>

```csharp
private void ResetSigningCertificate()
```

##### `ResetSuccinctId` <a name="ResetSuccinctId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetSuccinctId"></a>

```csharp
private void ResetSuccinctId()
```

##### `ResetTags` <a name="ResetTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider` <a name="ResetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```csharp
private void ResetUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider()
```

##### `ResetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider` <a name="ResetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```csharp
private void ResetUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider()
```

##### `ResetUserMappingMethod` <a name="ResetUserMappingMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingMethod"></a>

```csharp
private void ResetUserMappingMethod()
```

##### `ResetUserMappingStoreAttribute` <a name="ResetUserMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.resetUserMappingStoreAttribute"></a>

```csharp
private void ResetUserMappingStoreAttribute()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

IdentityDomainsIdentityProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsIdentityProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicy">CorrelationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference">IdentityDomainsIdentityProviderCorrelationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList">IdentityDomainsIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList">IdentityDomainsIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups">JitUserProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributes">JitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference">IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappings">JitUserProvGroupMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList">IdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lastNotificationSentTime">LastNotificationSentTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList">IdentityDomainsIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList">IdentityDomainsIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenantProviderId">TenantProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference">IdentityDomainsIdentityProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttributeInput">AssertionAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBindingInput">AuthnRequestBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicyInput">CorrelationPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificateInput">EncryptionCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrlInput">IconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrlInput">IdpSsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignatureInput">IncludeSigningCertInSignatureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroupsInput">JitUserProvAssignedGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributesInput">JitUserProvAttributesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabledInput">JitUserProvAttributeUpdateEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabledInput">JitUserProvCreateUserEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabledInput">JitUserProvEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabledInput">JitUserProvGroupAssertionAttributeEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethodInput">JitUserProvGroupAssignmentMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingModeInput">JitUserProvGroupMappingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingsInput">JitUserProvGroupMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeNameInput">JitUserProvGroupSamlAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabledInput">JitUserProvGroupStaticListEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroupsInput">JitUserProvIgnoreErrorOnAbsentGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBindingInput">LogoutBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabledInput">LogoutEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrlInput">LogoutRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrlInput">LogoutResponseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormatInput">NameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocidInput">OcidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerNameInput">PartnerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderIdInput">PartnerProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContextInput">RequestedAuthenticationContextInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthnInput">RequireForceAuthnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertionInput">RequiresEncryptedAssertionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequiredInput">SamlHoKrequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemasInput">SchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifierInput">ServiceInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPageInput">ShownOnLoginPageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithmInput">SignatureHashAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificateInput">SigningCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctIdInput">SuccinctIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput">UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput">Urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethodInput">UserMappingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttributeInput">UserMappingStoreAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttribute">AssertionAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBinding">AuthnRequestBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificate">EncryptionCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrl">IconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignature">IncludeSigningCertInSignature</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled">JitUserProvAttributeUpdateEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled">JitUserProvCreateUserEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabled">JitUserProvEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled">JitUserProvGroupAssertionAttributeEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod">JitUserProvGroupAssignmentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode">JitUserProvGroupMappingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName">JitUserProvGroupSamlAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled">JitUserProvGroupStaticListEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups">JitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBinding">LogoutBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabled">LogoutEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrl">LogoutRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrl">LogoutResponseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormat">NameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerName">PartnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderId">PartnerProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContext">RequestedAuthenticationContext</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthn">RequireForceAuthn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertion">RequiresEncryptedAssertion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequired">SamlHoKrequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifier">ServiceInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPage">ShownOnLoginPage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithm">SignatureHashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificate">SigningCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctId">SuccinctId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethod">UserMappingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttribute">UserMappingStoreAttribute</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `CorrelationPolicy`<sup>Required</sup> <a name="CorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicy"></a>

```csharp
public IdentityDomainsIdentityProviderCorrelationPolicyOutputReference CorrelationPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference">IdentityDomainsIdentityProviderCorrelationPolicyOutputReference</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsCreatedBy"></a>

```csharp
public IdentityDomainsIdentityProviderIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList">IdentityDomainsIdentityProviderIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastModifiedBy"></a>

```csharp
public IdentityDomainsIdentityProviderIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList">IdentityDomainsIdentityProviderIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `JitUserProvAssignedGroups`<sup>Required</sup> <a name="JitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups"></a>

```csharp
public IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList JitUserProvAssignedGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a>

---

##### `JitUserProvAttributes`<sup>Required</sup> <a name="JitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributes"></a>

```csharp
public IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference JitUserProvAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference">IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference</a>

---

##### `JitUserProvGroupMappings`<sup>Required</sup> <a name="JitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappings"></a>

```csharp
public IdentityDomainsIdentityProviderJitUserProvGroupMappingsList JitUserProvGroupMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList">IdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a>

---

##### `LastNotificationSentTime`<sup>Required</sup> <a name="LastNotificationSentTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.lastNotificationSentTime"></a>

```csharp
public string LastNotificationSentTime { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.meta"></a>

```csharp
public IdentityDomainsIdentityProviderMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList">IdentityDomainsIdentityProviderMetaList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tags"></a>

```csharp
public IdentityDomainsIdentityProviderTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList">IdentityDomainsIdentityProviderTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `TenantProviderId`<sup>Required</sup> <a name="TenantProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tenantProviderId"></a>

```csharp
public string TenantProviderId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeouts"></a>

```csharp
public IdentityDomainsIdentityProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference">IdentityDomainsIdentityProviderTimeoutsOutputReference</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference</a>

---

##### `Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Required</sup> <a name="Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference</a>

---

##### `AssertionAttributeInput`<sup>Optional</sup> <a name="AssertionAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttributeInput"></a>

```csharp
public string AssertionAttributeInput { get; }
```

- *Type:* string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthnRequestBindingInput`<sup>Optional</sup> <a name="AuthnRequestBindingInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBindingInput"></a>

```csharp
public string AuthnRequestBindingInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `CorrelationPolicyInput`<sup>Optional</sup> <a name="CorrelationPolicyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.correlationPolicyInput"></a>

```csharp
public IdentityDomainsIdentityProviderCorrelationPolicy CorrelationPolicyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EncryptionCertificateInput`<sup>Optional</sup> <a name="EncryptionCertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificateInput"></a>

```csharp
public string EncryptionCertificateInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `IconUrlInput`<sup>Optional</sup> <a name="IconUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrlInput"></a>

```csharp
public string IconUrlInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdpSsoUrlInput`<sup>Optional</sup> <a name="IdpSsoUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrlInput"></a>

```csharp
public string IdpSsoUrlInput { get; }
```

- *Type:* string

---

##### `IncludeSigningCertInSignatureInput`<sup>Optional</sup> <a name="IncludeSigningCertInSignatureInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignatureInput"></a>

```csharp
public object IncludeSigningCertInSignatureInput { get; }
```

- *Type:* object

---

##### `JitUserProvAssignedGroupsInput`<sup>Optional</sup> <a name="JitUserProvAssignedGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAssignedGroupsInput"></a>

```csharp
public object JitUserProvAssignedGroupsInput { get; }
```

- *Type:* object

---

##### `JitUserProvAttributesInput`<sup>Optional</sup> <a name="JitUserProvAttributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributesInput"></a>

```csharp
public IdentityDomainsIdentityProviderJitUserProvAttributes JitUserProvAttributesInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---

##### `JitUserProvAttributeUpdateEnabledInput`<sup>Optional</sup> <a name="JitUserProvAttributeUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabledInput"></a>

```csharp
public object JitUserProvAttributeUpdateEnabledInput { get; }
```

- *Type:* object

---

##### `JitUserProvCreateUserEnabledInput`<sup>Optional</sup> <a name="JitUserProvCreateUserEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabledInput"></a>

```csharp
public object JitUserProvCreateUserEnabledInput { get; }
```

- *Type:* object

---

##### `JitUserProvEnabledInput`<sup>Optional</sup> <a name="JitUserProvEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabledInput"></a>

```csharp
public object JitUserProvEnabledInput { get; }
```

- *Type:* object

---

##### `JitUserProvGroupAssertionAttributeEnabledInput`<sup>Optional</sup> <a name="JitUserProvGroupAssertionAttributeEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabledInput"></a>

```csharp
public object JitUserProvGroupAssertionAttributeEnabledInput { get; }
```

- *Type:* object

---

##### `JitUserProvGroupAssignmentMethodInput`<sup>Optional</sup> <a name="JitUserProvGroupAssignmentMethodInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethodInput"></a>

```csharp
public string JitUserProvGroupAssignmentMethodInput { get; }
```

- *Type:* string

---

##### `JitUserProvGroupMappingModeInput`<sup>Optional</sup> <a name="JitUserProvGroupMappingModeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingModeInput"></a>

```csharp
public string JitUserProvGroupMappingModeInput { get; }
```

- *Type:* string

---

##### `JitUserProvGroupMappingsInput`<sup>Optional</sup> <a name="JitUserProvGroupMappingsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingsInput"></a>

```csharp
public object JitUserProvGroupMappingsInput { get; }
```

- *Type:* object

---

##### `JitUserProvGroupSamlAttributeNameInput`<sup>Optional</sup> <a name="JitUserProvGroupSamlAttributeNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeNameInput"></a>

```csharp
public string JitUserProvGroupSamlAttributeNameInput { get; }
```

- *Type:* string

---

##### `JitUserProvGroupStaticListEnabledInput`<sup>Optional</sup> <a name="JitUserProvGroupStaticListEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabledInput"></a>

```csharp
public object JitUserProvGroupStaticListEnabledInput { get; }
```

- *Type:* object

---

##### `JitUserProvIgnoreErrorOnAbsentGroupsInput`<sup>Optional</sup> <a name="JitUserProvIgnoreErrorOnAbsentGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroupsInput"></a>

```csharp
public object JitUserProvIgnoreErrorOnAbsentGroupsInput { get; }
```

- *Type:* object

---

##### `LogoutBindingInput`<sup>Optional</sup> <a name="LogoutBindingInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBindingInput"></a>

```csharp
public string LogoutBindingInput { get; }
```

- *Type:* string

---

##### `LogoutEnabledInput`<sup>Optional</sup> <a name="LogoutEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabledInput"></a>

```csharp
public object LogoutEnabledInput { get; }
```

- *Type:* object

---

##### `LogoutRequestUrlInput`<sup>Optional</sup> <a name="LogoutRequestUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrlInput"></a>

```csharp
public string LogoutRequestUrlInput { get; }
```

- *Type:* string

---

##### `LogoutResponseUrlInput`<sup>Optional</sup> <a name="LogoutResponseUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrlInput"></a>

```csharp
public string LogoutResponseUrlInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `NameIdFormatInput`<sup>Optional</sup> <a name="NameIdFormatInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormatInput"></a>

```csharp
public string NameIdFormatInput { get; }
```

- *Type:* string

---

##### `OcidInput`<sup>Optional</sup> <a name="OcidInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocidInput"></a>

```csharp
public string OcidInput { get; }
```

- *Type:* string

---

##### `PartnerNameInput`<sup>Optional</sup> <a name="PartnerNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerNameInput"></a>

```csharp
public string PartnerNameInput { get; }
```

- *Type:* string

---

##### `PartnerProviderIdInput`<sup>Optional</sup> <a name="PartnerProviderIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderIdInput"></a>

```csharp
public string PartnerProviderIdInput { get; }
```

- *Type:* string

---

##### `RequestedAuthenticationContextInput`<sup>Optional</sup> <a name="RequestedAuthenticationContextInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContextInput"></a>

```csharp
public string[] RequestedAuthenticationContextInput { get; }
```

- *Type:* string[]

---

##### `RequireForceAuthnInput`<sup>Optional</sup> <a name="RequireForceAuthnInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthnInput"></a>

```csharp
public object RequireForceAuthnInput { get; }
```

- *Type:* object

---

##### `RequiresEncryptedAssertionInput`<sup>Optional</sup> <a name="RequiresEncryptedAssertionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertionInput"></a>

```csharp
public object RequiresEncryptedAssertionInput { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SamlHoKrequiredInput`<sup>Optional</sup> <a name="SamlHoKrequiredInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequiredInput"></a>

```csharp
public object SamlHoKrequiredInput { get; }
```

- *Type:* object

---

##### `SchemasInput`<sup>Optional</sup> <a name="SchemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemasInput"></a>

```csharp
public string[] SchemasInput { get; }
```

- *Type:* string[]

---

##### `ServiceInstanceIdentifierInput`<sup>Optional</sup> <a name="ServiceInstanceIdentifierInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifierInput"></a>

```csharp
public string ServiceInstanceIdentifierInput { get; }
```

- *Type:* string

---

##### `ShownOnLoginPageInput`<sup>Optional</sup> <a name="ShownOnLoginPageInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPageInput"></a>

```csharp
public object ShownOnLoginPageInput { get; }
```

- *Type:* object

---

##### `SignatureHashAlgorithmInput`<sup>Optional</sup> <a name="SignatureHashAlgorithmInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithmInput"></a>

```csharp
public string SignatureHashAlgorithmInput { get; }
```

- *Type:* string

---

##### `SigningCertificateInput`<sup>Optional</sup> <a name="SigningCertificateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificateInput"></a>

```csharp
public string SigningCertificateInput { get; }
```

- *Type:* string

---

##### `SuccinctIdInput`<sup>Optional</sup> <a name="SuccinctIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctIdInput"></a>

```csharp
public string SuccinctIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---

##### `Urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput`<sup>Optional</sup> <a name="Urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider Urnietfparamsscimschemasoracleidcsextensionx509IdentityProviderInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---

##### `UserMappingMethodInput`<sup>Optional</sup> <a name="UserMappingMethodInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethodInput"></a>

```csharp
public string UserMappingMethodInput { get; }
```

- *Type:* string

---

##### `UserMappingStoreAttributeInput`<sup>Optional</sup> <a name="UserMappingStoreAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttributeInput"></a>

```csharp
public string UserMappingStoreAttributeInput { get; }
```

- *Type:* string

---

##### `AssertionAttribute`<sup>Required</sup> <a name="AssertionAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.assertionAttribute"></a>

```csharp
public string AssertionAttribute { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `AuthnRequestBinding`<sup>Required</sup> <a name="AuthnRequestBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authnRequestBinding"></a>

```csharp
public string AuthnRequestBinding { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EncryptionCertificate`<sup>Required</sup> <a name="EncryptionCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.encryptionCertificate"></a>

```csharp
public string EncryptionCertificate { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.iconUrl"></a>

```csharp
public string IconUrl { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `IdpSsoUrl`<sup>Required</sup> <a name="IdpSsoUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.idpSsoUrl"></a>

```csharp
public string IdpSsoUrl { get; }
```

- *Type:* string

---

##### `IncludeSigningCertInSignature`<sup>Required</sup> <a name="IncludeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.includeSigningCertInSignature"></a>

```csharp
public object IncludeSigningCertInSignature { get; }
```

- *Type:* object

---

##### `JitUserProvAttributeUpdateEnabled`<sup>Required</sup> <a name="JitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled"></a>

```csharp
public object JitUserProvAttributeUpdateEnabled { get; }
```

- *Type:* object

---

##### `JitUserProvCreateUserEnabled`<sup>Required</sup> <a name="JitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled"></a>

```csharp
public object JitUserProvCreateUserEnabled { get; }
```

- *Type:* object

---

##### `JitUserProvEnabled`<sup>Required</sup> <a name="JitUserProvEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvEnabled"></a>

```csharp
public object JitUserProvEnabled { get; }
```

- *Type:* object

---

##### `JitUserProvGroupAssertionAttributeEnabled`<sup>Required</sup> <a name="JitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```csharp
public object JitUserProvGroupAssertionAttributeEnabled { get; }
```

- *Type:* object

---

##### `JitUserProvGroupAssignmentMethod`<sup>Required</sup> <a name="JitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod"></a>

```csharp
public string JitUserProvGroupAssignmentMethod { get; }
```

- *Type:* string

---

##### `JitUserProvGroupMappingMode`<sup>Required</sup> <a name="JitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode"></a>

```csharp
public string JitUserProvGroupMappingMode { get; }
```

- *Type:* string

---

##### `JitUserProvGroupSamlAttributeName`<sup>Required</sup> <a name="JitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName"></a>

```csharp
public string JitUserProvGroupSamlAttributeName { get; }
```

- *Type:* string

---

##### `JitUserProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled"></a>

```csharp
public object JitUserProvGroupStaticListEnabled { get; }
```

- *Type:* object

---

##### `JitUserProvIgnoreErrorOnAbsentGroups`<sup>Required</sup> <a name="JitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```csharp
public object JitUserProvIgnoreErrorOnAbsentGroups { get; }
```

- *Type:* object

---

##### `LogoutBinding`<sup>Required</sup> <a name="LogoutBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutBinding"></a>

```csharp
public string LogoutBinding { get; }
```

- *Type:* string

---

##### `LogoutEnabled`<sup>Required</sup> <a name="LogoutEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutEnabled"></a>

```csharp
public object LogoutEnabled { get; }
```

- *Type:* object

---

##### `LogoutRequestUrl`<sup>Required</sup> <a name="LogoutRequestUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutRequestUrl"></a>

```csharp
public string LogoutRequestUrl { get; }
```

- *Type:* string

---

##### `LogoutResponseUrl`<sup>Required</sup> <a name="LogoutResponseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.logoutResponseUrl"></a>

```csharp
public string LogoutResponseUrl { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `NameIdFormat`<sup>Required</sup> <a name="NameIdFormat" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.nameIdFormat"></a>

```csharp
public string NameIdFormat { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PartnerName`<sup>Required</sup> <a name="PartnerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerName"></a>

```csharp
public string PartnerName { get; }
```

- *Type:* string

---

##### `PartnerProviderId`<sup>Required</sup> <a name="PartnerProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.partnerProviderId"></a>

```csharp
public string PartnerProviderId { get; }
```

- *Type:* string

---

##### `RequestedAuthenticationContext`<sup>Required</sup> <a name="RequestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requestedAuthenticationContext"></a>

```csharp
public string[] RequestedAuthenticationContext { get; }
```

- *Type:* string[]

---

##### `RequireForceAuthn`<sup>Required</sup> <a name="RequireForceAuthn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requireForceAuthn"></a>

```csharp
public object RequireForceAuthn { get; }
```

- *Type:* object

---

##### `RequiresEncryptedAssertion`<sup>Required</sup> <a name="RequiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.requiresEncryptedAssertion"></a>

```csharp
public object RequiresEncryptedAssertion { get; }
```

- *Type:* object

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SamlHoKrequired`<sup>Required</sup> <a name="SamlHoKrequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.samlHoKrequired"></a>

```csharp
public object SamlHoKrequired { get; }
```

- *Type:* object

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `ServiceInstanceIdentifier`<sup>Required</sup> <a name="ServiceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.serviceInstanceIdentifier"></a>

```csharp
public string ServiceInstanceIdentifier { get; }
```

- *Type:* string

---

##### `ShownOnLoginPage`<sup>Required</sup> <a name="ShownOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.shownOnLoginPage"></a>

```csharp
public object ShownOnLoginPage { get; }
```

- *Type:* object

---

##### `SignatureHashAlgorithm`<sup>Required</sup> <a name="SignatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signatureHashAlgorithm"></a>

```csharp
public string SignatureHashAlgorithm { get; }
```

- *Type:* string

---

##### `SigningCertificate`<sup>Required</sup> <a name="SigningCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.signingCertificate"></a>

```csharp
public string SigningCertificate { get; }
```

- *Type:* string

---

##### `SuccinctId`<sup>Required</sup> <a name="SuccinctId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.succinctId"></a>

```csharp
public string SuccinctId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserMappingMethod`<sup>Required</sup> <a name="UserMappingMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingMethod"></a>

```csharp
public string UserMappingMethod { get; }
```

- *Type:* string

---

##### `UserMappingStoreAttribute`<sup>Required</sup> <a name="UserMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.userMappingStoreAttribute"></a>

```csharp
public string UserMappingStoreAttribute { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsIdentityProviderConfig <a name="IdentityDomainsIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string IdcsEndpoint,
    string PartnerName,
    string[] Schemas,
    string AssertionAttribute = null,
    string Attributes = null,
    string[] AttributeSets = null,
    string AuthnRequestBinding = null,
    string Authorization = null,
    IdentityDomainsIdentityProviderCorrelationPolicy CorrelationPolicy = null,
    string Description = null,
    string EncryptionCertificate = null,
    string ExternalId = null,
    string IconUrl = null,
    string IdpSsoUrl = null,
    object IncludeSigningCertInSignature = null,
    object JitUserProvAssignedGroups = null,
    IdentityDomainsIdentityProviderJitUserProvAttributes JitUserProvAttributes = null,
    object JitUserProvAttributeUpdateEnabled = null,
    object JitUserProvCreateUserEnabled = null,
    object JitUserProvEnabled = null,
    object JitUserProvGroupAssertionAttributeEnabled = null,
    string JitUserProvGroupAssignmentMethod = null,
    string JitUserProvGroupMappingMode = null,
    object JitUserProvGroupMappings = null,
    string JitUserProvGroupSamlAttributeName = null,
    object JitUserProvGroupStaticListEnabled = null,
    object JitUserProvIgnoreErrorOnAbsentGroups = null,
    string LogoutBinding = null,
    object LogoutEnabled = null,
    string LogoutRequestUrl = null,
    string LogoutResponseUrl = null,
    string Metadata = null,
    string NameIdFormat = null,
    string Ocid = null,
    string PartnerProviderId = null,
    string[] RequestedAuthenticationContext = null,
    object RequireForceAuthn = null,
    object RequiresEncryptedAssertion = null,
    string ResourceTypeSchemaVersion = null,
    object SamlHoKrequired = null,
    string ServiceInstanceIdentifier = null,
    object ShownOnLoginPage = null,
    string SignatureHashAlgorithm = null,
    string SigningCertificate = null,
    string SuccinctId = null,
    object Tags = null,
    IdentityDomainsIdentityProviderTimeouts Timeouts = null,
    string Type = null,
    IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider = null,
    IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider = null,
    string UserMappingMethod = null,
    string UserMappingStoreAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerName">PartnerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.schemas">Schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.assertionAttribute">AssertionAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authnRequestBinding">AuthnRequestBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.correlationPolicy">CorrelationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | correlation_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.encryptionCertificate">EncryptionCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.iconUrl">IconUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.includeSigningCertInSignature">IncludeSigningCertInSignature</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAssignedGroups">JitUserProvAssignedGroups</a></code> | <code>object</code> | jit_user_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributes">JitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | jit_user_prov_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributeUpdateEnabled">JitUserProvAttributeUpdateEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvCreateUserEnabled">JitUserProvCreateUserEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvEnabled">JitUserProvEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssertionAttributeEnabled">JitUserProvGroupAssertionAttributeEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssignmentMethod">JitUserProvGroupAssignmentMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappingMode">JitUserProvGroupMappingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappings">JitUserProvGroupMappings</a></code> | <code>object</code> | jit_user_prov_group_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupSamlAttributeName">JitUserProvGroupSamlAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupStaticListEnabled">JitUserProvGroupStaticListEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvIgnoreErrorOnAbsentGroups">JitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutBinding">LogoutBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutEnabled">LogoutEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutRequestUrl">LogoutRequestUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutResponseUrl">LogoutResponseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.metadata">Metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.nameIdFormat">NameIdFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.ocid">Ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerProviderId">PartnerProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requestedAuthenticationContext">RequestedAuthenticationContext</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requireForceAuthn">RequireForceAuthn</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requiresEncryptedAssertion">RequiresEncryptedAssertion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.samlHoKrequired">SamlHoKrequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.serviceInstanceIdentifier">ServiceInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.shownOnLoginPage">ShownOnLoginPage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signatureHashAlgorithm">SignatureHashAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signingCertificate">SigningCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.succinctId">SuccinctId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | urnietfparamsscimschemasoracleidcsextensionx509identity_provider block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingMethod">UserMappingMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingStoreAttribute">UserMappingStoreAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#enabled IdentityDomainsIdentityProvider#enabled}.

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idcs_endpoint IdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `PartnerName`<sup>Required</sup> <a name="PartnerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerName"></a>

```csharp
public string PartnerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_name IdentityDomainsIdentityProvider#partner_name}.

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.schemas"></a>

```csharp
public string[] Schemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#schemas IdentityDomainsIdentityProvider#schemas}.

---

##### `AssertionAttribute`<sup>Optional</sup> <a name="AssertionAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.assertionAttribute"></a>

```csharp
public string AssertionAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#assertion_attribute IdentityDomainsIdentityProvider#assertion_attribute}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attributes IdentityDomainsIdentityProvider#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#attribute_sets IdentityDomainsIdentityProvider#attribute_sets}.

---

##### `AuthnRequestBinding`<sup>Optional</sup> <a name="AuthnRequestBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authnRequestBinding"></a>

```csharp
public string AuthnRequestBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authn_request_binding IdentityDomainsIdentityProvider#authn_request_binding}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authorization IdentityDomainsIdentityProvider#authorization}.

---

##### `CorrelationPolicy`<sup>Optional</sup> <a name="CorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.correlationPolicy"></a>

```csharp
public IdentityDomainsIdentityProviderCorrelationPolicy CorrelationPolicy { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

correlation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#correlation_policy IdentityDomainsIdentityProvider#correlation_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#description IdentityDomainsIdentityProvider#description}.

---

##### `EncryptionCertificate`<sup>Optional</sup> <a name="EncryptionCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.encryptionCertificate"></a>

```csharp
public string EncryptionCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#encryption_certificate IdentityDomainsIdentityProvider#encryption_certificate}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#external_id IdentityDomainsIdentityProvider#external_id}.

---

##### `IconUrl`<sup>Optional</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.iconUrl"></a>

```csharp
public string IconUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#icon_url IdentityDomainsIdentityProvider#icon_url}.

---

##### `IdpSsoUrl`<sup>Optional</sup> <a name="IdpSsoUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.idpSsoUrl"></a>

```csharp
public string IdpSsoUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_sso_url IdentityDomainsIdentityProvider#idp_sso_url}.

---

##### `IncludeSigningCertInSignature`<sup>Optional</sup> <a name="IncludeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.includeSigningCertInSignature"></a>

```csharp
public object IncludeSigningCertInSignature { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#include_signing_cert_in_signature IdentityDomainsIdentityProvider#include_signing_cert_in_signature}.

---

##### `JitUserProvAssignedGroups`<sup>Optional</sup> <a name="JitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAssignedGroups"></a>

```csharp
public object JitUserProvAssignedGroups { get; set; }
```

- *Type:* object

jit_user_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_assigned_groups IdentityDomainsIdentityProvider#jit_user_prov_assigned_groups}

---

##### `JitUserProvAttributes`<sup>Optional</sup> <a name="JitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributes"></a>

```csharp
public IdentityDomainsIdentityProviderJitUserProvAttributes JitUserProvAttributes { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

jit_user_prov_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attributes IdentityDomainsIdentityProvider#jit_user_prov_attributes}

---

##### `JitUserProvAttributeUpdateEnabled`<sup>Optional</sup> <a name="JitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvAttributeUpdateEnabled"></a>

```csharp
public object JitUserProvAttributeUpdateEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_attribute_update_enabled IdentityDomainsIdentityProvider#jit_user_prov_attribute_update_enabled}.

---

##### `JitUserProvCreateUserEnabled`<sup>Optional</sup> <a name="JitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvCreateUserEnabled"></a>

```csharp
public object JitUserProvCreateUserEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_create_user_enabled IdentityDomainsIdentityProvider#jit_user_prov_create_user_enabled}.

---

##### `JitUserProvEnabled`<sup>Optional</sup> <a name="JitUserProvEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvEnabled"></a>

```csharp
public object JitUserProvEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_enabled IdentityDomainsIdentityProvider#jit_user_prov_enabled}.

---

##### `JitUserProvGroupAssertionAttributeEnabled`<sup>Optional</sup> <a name="JitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```csharp
public object JitUserProvGroupAssertionAttributeEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assertion_attribute_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_assertion_attribute_enabled}.

---

##### `JitUserProvGroupAssignmentMethod`<sup>Optional</sup> <a name="JitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupAssignmentMethod"></a>

```csharp
public string JitUserProvGroupAssignmentMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_assignment_method IdentityDomainsIdentityProvider#jit_user_prov_group_assignment_method}.

---

##### `JitUserProvGroupMappingMode`<sup>Optional</sup> <a name="JitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappingMode"></a>

```csharp
public string JitUserProvGroupMappingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mapping_mode IdentityDomainsIdentityProvider#jit_user_prov_group_mapping_mode}.

---

##### `JitUserProvGroupMappings`<sup>Optional</sup> <a name="JitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupMappings"></a>

```csharp
public object JitUserProvGroupMappings { get; set; }
```

- *Type:* object

jit_user_prov_group_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_mappings IdentityDomainsIdentityProvider#jit_user_prov_group_mappings}

---

##### `JitUserProvGroupSamlAttributeName`<sup>Optional</sup> <a name="JitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupSamlAttributeName"></a>

```csharp
public string JitUserProvGroupSamlAttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_saml_attribute_name IdentityDomainsIdentityProvider#jit_user_prov_group_saml_attribute_name}.

---

##### `JitUserProvGroupStaticListEnabled`<sup>Optional</sup> <a name="JitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvGroupStaticListEnabled"></a>

```csharp
public object JitUserProvGroupStaticListEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_user_prov_group_static_list_enabled}.

---

##### `JitUserProvIgnoreErrorOnAbsentGroups`<sup>Optional</sup> <a name="JitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```csharp
public object JitUserProvIgnoreErrorOnAbsentGroups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_user_prov_ignore_error_on_absent_groups IdentityDomainsIdentityProvider#jit_user_prov_ignore_error_on_absent_groups}.

---

##### `LogoutBinding`<sup>Optional</sup> <a name="LogoutBinding" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutBinding"></a>

```csharp
public string LogoutBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_binding IdentityDomainsIdentityProvider#logout_binding}.

---

##### `LogoutEnabled`<sup>Optional</sup> <a name="LogoutEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutEnabled"></a>

```csharp
public object LogoutEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_enabled IdentityDomainsIdentityProvider#logout_enabled}.

---

##### `LogoutRequestUrl`<sup>Optional</sup> <a name="LogoutRequestUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutRequestUrl"></a>

```csharp
public string LogoutRequestUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_request_url IdentityDomainsIdentityProvider#logout_request_url}.

---

##### `LogoutResponseUrl`<sup>Optional</sup> <a name="LogoutResponseUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.logoutResponseUrl"></a>

```csharp
public string LogoutResponseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#logout_response_url IdentityDomainsIdentityProvider#logout_response_url}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#metadata IdentityDomainsIdentityProvider#metadata}.

---

##### `NameIdFormat`<sup>Optional</sup> <a name="NameIdFormat" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.nameIdFormat"></a>

```csharp
public string NameIdFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#name_id_format IdentityDomainsIdentityProvider#name_id_format}.

---

##### `Ocid`<sup>Optional</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.ocid"></a>

```csharp
public string Ocid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocid IdentityDomainsIdentityProvider#ocid}.

---

##### `PartnerProviderId`<sup>Optional</sup> <a name="PartnerProviderId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.partnerProviderId"></a>

```csharp
public string PartnerProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#partner_provider_id IdentityDomainsIdentityProvider#partner_provider_id}.

---

##### `RequestedAuthenticationContext`<sup>Optional</sup> <a name="RequestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requestedAuthenticationContext"></a>

```csharp
public string[] RequestedAuthenticationContext { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requested_authentication_context IdentityDomainsIdentityProvider#requested_authentication_context}.

---

##### `RequireForceAuthn`<sup>Optional</sup> <a name="RequireForceAuthn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requireForceAuthn"></a>

```csharp
public object RequireForceAuthn { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#require_force_authn IdentityDomainsIdentityProvider#require_force_authn}.

---

##### `RequiresEncryptedAssertion`<sup>Optional</sup> <a name="RequiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.requiresEncryptedAssertion"></a>

```csharp
public object RequiresEncryptedAssertion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#requires_encrypted_assertion IdentityDomainsIdentityProvider#requires_encrypted_assertion}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#resource_type_schema_version IdentityDomainsIdentityProvider#resource_type_schema_version}.

---

##### `SamlHoKrequired`<sup>Optional</sup> <a name="SamlHoKrequired" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.samlHoKrequired"></a>

```csharp
public object SamlHoKrequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#saml_ho_krequired IdentityDomainsIdentityProvider#saml_ho_krequired}.

---

##### `ServiceInstanceIdentifier`<sup>Optional</sup> <a name="ServiceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.serviceInstanceIdentifier"></a>

```csharp
public string ServiceInstanceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_instance_identifier IdentityDomainsIdentityProvider#service_instance_identifier}.

---

##### `ShownOnLoginPage`<sup>Optional</sup> <a name="ShownOnLoginPage" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.shownOnLoginPage"></a>

```csharp
public object ShownOnLoginPage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#shown_on_login_page IdentityDomainsIdentityProvider#shown_on_login_page}.

---

##### `SignatureHashAlgorithm`<sup>Optional</sup> <a name="SignatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signatureHashAlgorithm"></a>

```csharp
public string SignatureHashAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signature_hash_algorithm IdentityDomainsIdentityProvider#signature_hash_algorithm}.

---

##### `SigningCertificate`<sup>Optional</sup> <a name="SigningCertificate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.signingCertificate"></a>

```csharp
public string SigningCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate IdentityDomainsIdentityProvider#signing_certificate}.

---

##### `SuccinctId`<sup>Optional</sup> <a name="SuccinctId" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.succinctId"></a>

```csharp
public string SuccinctId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#succinct_id IdentityDomainsIdentityProvider#succinct_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#tags IdentityDomainsIdentityProvider#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.timeouts"></a>

```csharp
public IdentityDomainsIdentityProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts">IdentityDomainsIdentityProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#timeouts IdentityDomainsIdentityProvider#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Optional</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionsocial_identity_provider}

---

##### `Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Optional</sup> <a name="Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

urnietfparamsscimschemasoracleidcsextensionx509identity_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider IdentityDomainsIdentityProvider#urnietfparamsscimschemasoracleidcsextensionx509identity_provider}

---

##### `UserMappingMethod`<sup>Optional</sup> <a name="UserMappingMethod" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingMethod"></a>

```csharp
public string UserMappingMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_method IdentityDomainsIdentityProvider#user_mapping_method}.

---

##### `UserMappingStoreAttribute`<sup>Optional</sup> <a name="UserMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderConfig.property.userMappingStoreAttribute"></a>

```csharp
public string UserMappingStoreAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_mapping_store_attribute IdentityDomainsIdentityProvider#user_mapping_store_attribute}.

---

### IdentityDomainsIdentityProviderCorrelationPolicy <a name="IdentityDomainsIdentityProviderCorrelationPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderCorrelationPolicy {
    string Type,
    string Value,
    string Display = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.display">Display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#type IdentityDomainsIdentityProvider#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}.

---

### IdentityDomainsIdentityProviderIdcsCreatedBy <a name="IdentityDomainsIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderIdcsCreatedBy {

};
```


### IdentityDomainsIdentityProviderIdcsLastModifiedBy <a name="IdentityDomainsIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderIdcsLastModifiedBy {

};
```


### IdentityDomainsIdentityProviderJitUserProvAssignedGroups <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvAssignedGroups {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroups.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderJitUserProvAttributes <a name="IdentityDomainsIdentityProviderJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvAttributes {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderJitUserProvGroupMappings <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvGroupMappings {
    string IdpGroup,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.idpGroup">IdpGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_group IdentityDomainsIdentityProvider#idp_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `IdpGroup`<sup>Required</sup> <a name="IdpGroup" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.idpGroup"></a>

```csharp
public string IdpGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#idp_group IdentityDomainsIdentityProvider#idp_group}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappings.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderMeta <a name="IdentityDomainsIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderMeta {

};
```


### IdentityDomainsIdentityProviderTags <a name="IdentityDomainsIdentityProviderTags" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#key IdentityDomainsIdentityProvider#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#key IdentityDomainsIdentityProvider#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

### IdentityDomainsIdentityProviderTimeouts <a name="IdentityDomainsIdentityProviderTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#create IdentityDomainsIdentityProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#delete IdentityDomainsIdentityProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#update IdentityDomainsIdentityProvider#update}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider {
    object AccountLinkingEnabled,
    string ConsumerKey,
    string ConsumerSecret,
    object RegistrationEnabled,
    string ServiceProviderName,
    string AccessTokenUrl = null,
    string[] AdminScope = null,
    string AuthzUrl = null,
    object AutoRedirectEnabled = null,
    object ClientCredentialInPayload = null,
    double ClockSkewInSeconds = null,
    string DiscoveryUrl = null,
    string IdAttribute = null,
    object JitProvAssignedGroups = null,
    object JitProvGroupStaticListEnabled = null,
    string ProfileUrl = null,
    string RedirectUrl = null,
    string[] Scope = null,
    object SocialJitProvisioningEnabled = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.registrationEnabled">RegistrationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.serviceProviderName">ServiceProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.adminScope">AdminScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.authzUrl">AuthzUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.idAttribute">IdAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code>object</code> | jit_prov_assigned_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.scope">Scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}. |

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accountLinkingEnabled"></a>

```csharp
public object AccountLinkingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#account_linking_enabled IdentityDomainsIdentityProvider#account_linking_enabled}.

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_key IdentityDomainsIdentityProvider#consumer_key}.

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#consumer_secret IdentityDomainsIdentityProvider#consumer_secret}.

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.registrationEnabled"></a>

```csharp
public object RegistrationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#registration_enabled IdentityDomainsIdentityProvider#registration_enabled}.

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.serviceProviderName"></a>

```csharp
public string ServiceProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#service_provider_name IdentityDomainsIdentityProvider#service_provider_name}.

---

##### `AccessTokenUrl`<sup>Optional</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#access_token_url IdentityDomainsIdentityProvider#access_token_url}.

---

##### `AdminScope`<sup>Optional</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.adminScope"></a>

```csharp
public string[] AdminScope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#admin_scope IdentityDomainsIdentityProvider#admin_scope}.

---

##### `AuthzUrl`<sup>Optional</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.authzUrl"></a>

```csharp
public string AuthzUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#authz_url IdentityDomainsIdentityProvider#authz_url}.

---

##### `AutoRedirectEnabled`<sup>Optional</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.autoRedirectEnabled"></a>

```csharp
public object AutoRedirectEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#auto_redirect_enabled IdentityDomainsIdentityProvider#auto_redirect_enabled}.

---

##### `ClientCredentialInPayload`<sup>Optional</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clientCredentialInPayload"></a>

```csharp
public object ClientCredentialInPayload { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#client_credential_in_payload IdentityDomainsIdentityProvider#client_credential_in_payload}.

---

##### `ClockSkewInSeconds`<sup>Optional</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.clockSkewInSeconds"></a>

```csharp
public double ClockSkewInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#clock_skew_in_seconds IdentityDomainsIdentityProvider#clock_skew_in_seconds}.

---

##### `DiscoveryUrl`<sup>Optional</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#discovery_url IdentityDomainsIdentityProvider#discovery_url}.

---

##### `IdAttribute`<sup>Optional</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.idAttribute"></a>

```csharp
public string IdAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#id_attribute IdentityDomainsIdentityProvider#id_attribute}.

---

##### `JitProvAssignedGroups`<sup>Optional</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvAssignedGroups"></a>

```csharp
public object JitProvAssignedGroups { get; set; }
```

- *Type:* object

jit_prov_assigned_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_assigned_groups IdentityDomainsIdentityProvider#jit_prov_assigned_groups}

---

##### `JitProvGroupStaticListEnabled`<sup>Optional</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.jitProvGroupStaticListEnabled"></a>

```csharp
public object JitProvGroupStaticListEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#jit_prov_group_static_list_enabled IdentityDomainsIdentityProvider#jit_prov_group_static_list_enabled}.

---

##### `ProfileUrl`<sup>Optional</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#profile_url IdentityDomainsIdentityProvider#profile_url}.

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#redirect_url IdentityDomainsIdentityProvider#redirect_url}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.scope"></a>

```csharp
public string[] Scope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#scope IdentityDomainsIdentityProvider#scope}.

---

##### `SocialJitProvisioningEnabled`<sup>Optional</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.socialJitProvisioningEnabled"></a>

```csharp
public object SocialJitProvisioningEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#social_jit_provisioning_enabled IdentityDomainsIdentityProvider#social_jit_provisioning_enabled}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#status IdentityDomainsIdentityProvider#status}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups {
    string Value,
    string Display = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.display">Display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#value IdentityDomainsIdentityProvider#value}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#display IdentityDomainsIdentityProvider#display}.

---

### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider {
    string CertMatchAttribute,
    string[] SigningCertificateChain,
    string UserMatchAttribute,
    object CrlCheckOnOcspFailureEnabled = null,
    object CrlEnabled = null,
    string CrlLocation = null,
    double CrlReloadDuration = null,
    object EkuValidationEnabled = null,
    string[] EkuValues = null,
    object OcspAllowUnknownResponseStatus = null,
    object OcspEnabled = null,
    object OcspEnableSignedResponse = null,
    string OcspResponderUrl = null,
    double OcspRevalidateTime = null,
    string OcspServerName = null,
    string[] OcspTrustCertChain = null,
    string OtherCertMatchAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.certMatchAttribute">CertMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.signingCertificateChain">SigningCertificateChain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.userMatchAttribute">UserMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlEnabled">CrlEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlLocation">CrlLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlReloadDuration">CrlReloadDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValidationEnabled">EkuValidationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValues">EkuValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspAllowUnknownResponseStatus">OcspAllowUnknownResponseStatus</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnabled">OcspEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnableSignedResponse">OcspEnableSignedResponse</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspRevalidateTime">OcspRevalidateTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspServerName">OcspServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspTrustCertChain">OcspTrustCertChain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.otherCertMatchAttribute">OtherCertMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}. |

---

##### `CertMatchAttribute`<sup>Required</sup> <a name="CertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.certMatchAttribute"></a>

```csharp
public string CertMatchAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#cert_match_attribute IdentityDomainsIdentityProvider#cert_match_attribute}.

---

##### `SigningCertificateChain`<sup>Required</sup> <a name="SigningCertificateChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.signingCertificateChain"></a>

```csharp
public string[] SigningCertificateChain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#signing_certificate_chain IdentityDomainsIdentityProvider#signing_certificate_chain}.

---

##### `UserMatchAttribute`<sup>Required</sup> <a name="UserMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.userMatchAttribute"></a>

```csharp
public string UserMatchAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#user_match_attribute IdentityDomainsIdentityProvider#user_match_attribute}.

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Optional</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlCheckOnOcspFailureEnabled"></a>

```csharp
public object CrlCheckOnOcspFailureEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_check_on_ocsp_failure_enabled IdentityDomainsIdentityProvider#crl_check_on_ocsp_failure_enabled}.

---

##### `CrlEnabled`<sup>Optional</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlEnabled"></a>

```csharp
public object CrlEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_enabled IdentityDomainsIdentityProvider#crl_enabled}.

---

##### `CrlLocation`<sup>Optional</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlLocation"></a>

```csharp
public string CrlLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_location IdentityDomainsIdentityProvider#crl_location}.

---

##### `CrlReloadDuration`<sup>Optional</sup> <a name="CrlReloadDuration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.crlReloadDuration"></a>

```csharp
public double CrlReloadDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#crl_reload_duration IdentityDomainsIdentityProvider#crl_reload_duration}.

---

##### `EkuValidationEnabled`<sup>Optional</sup> <a name="EkuValidationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValidationEnabled"></a>

```csharp
public object EkuValidationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_validation_enabled IdentityDomainsIdentityProvider#eku_validation_enabled}.

---

##### `EkuValues`<sup>Optional</sup> <a name="EkuValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ekuValues"></a>

```csharp
public string[] EkuValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#eku_values IdentityDomainsIdentityProvider#eku_values}.

---

##### `OcspAllowUnknownResponseStatus`<sup>Optional</sup> <a name="OcspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspAllowUnknownResponseStatus"></a>

```csharp
public object OcspAllowUnknownResponseStatus { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_allow_unknown_response_status IdentityDomainsIdentityProvider#ocsp_allow_unknown_response_status}.

---

##### `OcspEnabled`<sup>Optional</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnabled"></a>

```csharp
public object OcspEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enabled IdentityDomainsIdentityProvider#ocsp_enabled}.

---

##### `OcspEnableSignedResponse`<sup>Optional</sup> <a name="OcspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspEnableSignedResponse"></a>

```csharp
public object OcspEnableSignedResponse { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_enable_signed_response IdentityDomainsIdentityProvider#ocsp_enable_signed_response}.

---

##### `OcspResponderUrl`<sup>Optional</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspResponderUrl"></a>

```csharp
public string OcspResponderUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_responder_url IdentityDomainsIdentityProvider#ocsp_responder_url}.

---

##### `OcspRevalidateTime`<sup>Optional</sup> <a name="OcspRevalidateTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspRevalidateTime"></a>

```csharp
public double OcspRevalidateTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_revalidate_time IdentityDomainsIdentityProvider#ocsp_revalidate_time}.

---

##### `OcspServerName`<sup>Optional</sup> <a name="OcspServerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspServerName"></a>

```csharp
public string OcspServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_server_name IdentityDomainsIdentityProvider#ocsp_server_name}.

---

##### `OcspTrustCertChain`<sup>Optional</sup> <a name="OcspTrustCertChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.ocspTrustCertChain"></a>

```csharp
public string[] OcspTrustCertChain { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#ocsp_trust_cert_chain IdentityDomainsIdentityProvider#ocsp_trust_cert_chain}.

---

##### `OtherCertMatchAttribute`<sup>Optional</sup> <a name="OtherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.property.otherCertMatchAttribute"></a>

```csharp
public string OtherCertMatchAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_identity_provider#other_cert_match_attribute IdentityDomainsIdentityProvider#other_cert_match_attribute}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsIdentityProviderCorrelationPolicyOutputReference <a name="IdentityDomainsIdentityProviderCorrelationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderCorrelationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplay` <a name="ResetDisplay" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityProviderCorrelationPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderCorrelationPolicy">IdentityDomainsIdentityProviderCorrelationPolicy</a>

---


### IdentityDomainsIdentityProviderIdcsCreatedByList <a name="IdentityDomainsIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get"></a>

```csharp
private IdentityDomainsIdentityProviderIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsIdentityProviderIdcsCreatedByOutputReference <a name="IdentityDomainsIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy">IdentityDomainsIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityProviderIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsCreatedBy">IdentityDomainsIdentityProviderIdcsCreatedBy</a>

---


### IdentityDomainsIdentityProviderIdcsLastModifiedByList <a name="IdentityDomainsIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get"></a>

```csharp
private IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference <a name="IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy">IdentityDomainsIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityProviderIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderIdcsLastModifiedBy">IdentityDomainsIdentityProviderIdcsLastModifiedBy</a>

---


### IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get"></a>

```csharp
private IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityProviderJitUserProvAttributes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvAttributes">IdentityDomainsIdentityProviderJitUserProvAttributes</a>

---


### IdentityDomainsIdentityProviderJitUserProvGroupMappingsList <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappingsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvGroupMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get"></a>

```csharp
private IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference <a name="IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroupInput">IdpGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup">IdpGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `IdpGroupInput`<sup>Optional</sup> <a name="IdpGroupInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroupInput"></a>

```csharp
public string IdpGroupInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `IdpGroup`<sup>Required</sup> <a name="IdpGroup" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup"></a>

```csharp
public string IdpGroup { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderMetaList <a name="IdentityDomainsIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get"></a>

```csharp
private IdentityDomainsIdentityProviderMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityDomainsIdentityProviderMetaOutputReference <a name="IdentityDomainsIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta">IdentityDomainsIdentityProviderMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMetaOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityProviderMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderMeta">IdentityDomainsIdentityProviderMeta</a>

---


### IdentityDomainsIdentityProviderTagsList <a name="IdentityDomainsIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get"></a>

```csharp
private IdentityDomainsIdentityProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderTagsOutputReference <a name="IdentityDomainsIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderTimeoutsOutputReference <a name="IdentityDomainsIdentityProviderTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```csharp
private IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplay` <a name="ResetDisplay" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups">PutJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAccessTokenUrl">ResetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAdminScope">ResetAdminScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAuthzUrl">ResetAuthzUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAutoRedirectEnabled">ResetAutoRedirectEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClientCredentialInPayload">ResetClientCredentialInPayload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClockSkewInSeconds">ResetClockSkewInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetDiscoveryUrl">ResetDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetIdAttribute">ResetIdAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvAssignedGroups">ResetJitProvAssignedGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvGroupStaticListEnabled">ResetJitProvGroupStaticListEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetProfileUrl">ResetProfileUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetSocialJitProvisioningEnabled">ResetSocialJitProvisioningEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJitProvAssignedGroups` <a name="PutJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups"></a>

```csharp
private void PutJitProvAssignedGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.putJitProvAssignedGroups.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessTokenUrl` <a name="ResetAccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAccessTokenUrl"></a>

```csharp
private void ResetAccessTokenUrl()
```

##### `ResetAdminScope` <a name="ResetAdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAdminScope"></a>

```csharp
private void ResetAdminScope()
```

##### `ResetAuthzUrl` <a name="ResetAuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAuthzUrl"></a>

```csharp
private void ResetAuthzUrl()
```

##### `ResetAutoRedirectEnabled` <a name="ResetAutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetAutoRedirectEnabled"></a>

```csharp
private void ResetAutoRedirectEnabled()
```

##### `ResetClientCredentialInPayload` <a name="ResetClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClientCredentialInPayload"></a>

```csharp
private void ResetClientCredentialInPayload()
```

##### `ResetClockSkewInSeconds` <a name="ResetClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetClockSkewInSeconds"></a>

```csharp
private void ResetClockSkewInSeconds()
```

##### `ResetDiscoveryUrl` <a name="ResetDiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetDiscoveryUrl"></a>

```csharp
private void ResetDiscoveryUrl()
```

##### `ResetIdAttribute` <a name="ResetIdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetIdAttribute"></a>

```csharp
private void ResetIdAttribute()
```

##### `ResetJitProvAssignedGroups` <a name="ResetJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvAssignedGroups"></a>

```csharp
private void ResetJitProvAssignedGroups()
```

##### `ResetJitProvGroupStaticListEnabled` <a name="ResetJitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetJitProvGroupStaticListEnabled"></a>

```csharp
private void ResetJitProvGroupStaticListEnabled()
```

##### `ResetProfileUrl` <a name="ResetProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetProfileUrl"></a>

```csharp
private void ResetProfileUrl()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetRedirectUrl"></a>

```csharp
private void ResetRedirectUrl()
```

##### `ResetScope` <a name="ResetScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSocialJitProvisioningEnabled` <a name="ResetSocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetSocialJitProvisioningEnabled"></a>

```csharp
private void ResetSocialJitProvisioningEnabled()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabledInput">AccountLinkingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScopeInput">AdminScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrlInput">AuthzUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabledInput">AutoRedirectEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayloadInput">ClientCredentialInPayloadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSecondsInput">ClockSkewInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttributeInput">IdAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroupsInput">JitProvAssignedGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabledInput">JitProvGroupStaticListEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrlInput">ProfileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabledInput">RegistrationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderNameInput">ServiceProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabledInput">SocialJitProvisioningEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope">AdminScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl">AuthzUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute">IdAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled">RegistrationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName">ServiceProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JitProvAssignedGroups`<sup>Required</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList JitProvAssignedGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrlInput"></a>

```csharp
public string AccessTokenUrlInput { get; }
```

- *Type:* string

---

##### `AccountLinkingEnabledInput`<sup>Optional</sup> <a name="AccountLinkingEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabledInput"></a>

```csharp
public object AccountLinkingEnabledInput { get; }
```

- *Type:* object

---

##### `AdminScopeInput`<sup>Optional</sup> <a name="AdminScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScopeInput"></a>

```csharp
public string[] AdminScopeInput { get; }
```

- *Type:* string[]

---

##### `AuthzUrlInput`<sup>Optional</sup> <a name="AuthzUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrlInput"></a>

```csharp
public string AuthzUrlInput { get; }
```

- *Type:* string

---

##### `AutoRedirectEnabledInput`<sup>Optional</sup> <a name="AutoRedirectEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabledInput"></a>

```csharp
public object AutoRedirectEnabledInput { get; }
```

- *Type:* object

---

##### `ClientCredentialInPayloadInput`<sup>Optional</sup> <a name="ClientCredentialInPayloadInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayloadInput"></a>

```csharp
public object ClientCredentialInPayloadInput { get; }
```

- *Type:* object

---

##### `ClockSkewInSecondsInput`<sup>Optional</sup> <a name="ClockSkewInSecondsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSecondsInput"></a>

```csharp
public double ClockSkewInSecondsInput { get; }
```

- *Type:* double

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKeyInput"></a>

```csharp
public string ConsumerKeyInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecretInput"></a>

```csharp
public string ConsumerSecretInput { get; }
```

- *Type:* string

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrlInput"></a>

```csharp
public string DiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `IdAttributeInput`<sup>Optional</sup> <a name="IdAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttributeInput"></a>

```csharp
public string IdAttributeInput { get; }
```

- *Type:* string

---

##### `JitProvAssignedGroupsInput`<sup>Optional</sup> <a name="JitProvAssignedGroupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroupsInput"></a>

```csharp
public object JitProvAssignedGroupsInput { get; }
```

- *Type:* object

---

##### `JitProvGroupStaticListEnabledInput`<sup>Optional</sup> <a name="JitProvGroupStaticListEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabledInput"></a>

```csharp
public object JitProvGroupStaticListEnabledInput { get; }
```

- *Type:* object

---

##### `ProfileUrlInput`<sup>Optional</sup> <a name="ProfileUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrlInput"></a>

```csharp
public string ProfileUrlInput { get; }
```

- *Type:* string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `RegistrationEnabledInput`<sup>Optional</sup> <a name="RegistrationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabledInput"></a>

```csharp
public object RegistrationEnabledInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scopeInput"></a>

```csharp
public string[] ScopeInput { get; }
```

- *Type:* string[]

---

##### `ServiceProviderNameInput`<sup>Optional</sup> <a name="ServiceProviderNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderNameInput"></a>

```csharp
public string ServiceProviderNameInput { get; }
```

- *Type:* string

---

##### `SocialJitProvisioningEnabledInput`<sup>Optional</sup> <a name="SocialJitProvisioningEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabledInput"></a>

```csharp
public object SocialJitProvisioningEnabledInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; }
```

- *Type:* string

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled"></a>

```csharp
public object AccountLinkingEnabled { get; }
```

- *Type:* object

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope"></a>

```csharp
public string[] AdminScope { get; }
```

- *Type:* string[]

---

##### `AuthzUrl`<sup>Required</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl"></a>

```csharp
public string AuthzUrl { get; }
```

- *Type:* string

---

##### `AutoRedirectEnabled`<sup>Required</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled"></a>

```csharp
public object AutoRedirectEnabled { get; }
```

- *Type:* object

---

##### `ClientCredentialInPayload`<sup>Required</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload"></a>

```csharp
public object ClientCredentialInPayload { get; }
```

- *Type:* object

---

##### `ClockSkewInSeconds`<sup>Required</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds"></a>

```csharp
public double ClockSkewInSeconds { get; }
```

- *Type:* double

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `IdAttribute`<sup>Required</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute"></a>

```csharp
public string IdAttribute { get; }
```

- *Type:* string

---

##### `JitProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled"></a>

```csharp
public object JitProvGroupStaticListEnabled { get; }
```

- *Type:* object

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled"></a>

```csharp
public object RegistrationEnabled { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName"></a>

```csharp
public string ServiceProviderName { get; }
```

- *Type:* string

---

##### `SocialJitProvisioningEnabled`<sup>Required</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled"></a>

```csharp
public object SocialJitProvisioningEnabled { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---


### IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference <a name="IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlCheckOnOcspFailureEnabled">ResetCrlCheckOnOcspFailureEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlEnabled">ResetCrlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlLocation">ResetCrlLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlReloadDuration">ResetCrlReloadDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValidationEnabled">ResetEkuValidationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValues">ResetEkuValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspAllowUnknownResponseStatus">ResetOcspAllowUnknownResponseStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnabled">ResetOcspEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnableSignedResponse">ResetOcspEnableSignedResponse</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspResponderUrl">ResetOcspResponderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspRevalidateTime">ResetOcspRevalidateTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspServerName">ResetOcspServerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspTrustCertChain">ResetOcspTrustCertChain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOtherCertMatchAttribute">ResetOtherCertMatchAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrlCheckOnOcspFailureEnabled` <a name="ResetCrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlCheckOnOcspFailureEnabled"></a>

```csharp
private void ResetCrlCheckOnOcspFailureEnabled()
```

##### `ResetCrlEnabled` <a name="ResetCrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlEnabled"></a>

```csharp
private void ResetCrlEnabled()
```

##### `ResetCrlLocation` <a name="ResetCrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlLocation"></a>

```csharp
private void ResetCrlLocation()
```

##### `ResetCrlReloadDuration` <a name="ResetCrlReloadDuration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetCrlReloadDuration"></a>

```csharp
private void ResetCrlReloadDuration()
```

##### `ResetEkuValidationEnabled` <a name="ResetEkuValidationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValidationEnabled"></a>

```csharp
private void ResetEkuValidationEnabled()
```

##### `ResetEkuValues` <a name="ResetEkuValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetEkuValues"></a>

```csharp
private void ResetEkuValues()
```

##### `ResetOcspAllowUnknownResponseStatus` <a name="ResetOcspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspAllowUnknownResponseStatus"></a>

```csharp
private void ResetOcspAllowUnknownResponseStatus()
```

##### `ResetOcspEnabled` <a name="ResetOcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnabled"></a>

```csharp
private void ResetOcspEnabled()
```

##### `ResetOcspEnableSignedResponse` <a name="ResetOcspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspEnableSignedResponse"></a>

```csharp
private void ResetOcspEnableSignedResponse()
```

##### `ResetOcspResponderUrl` <a name="ResetOcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspResponderUrl"></a>

```csharp
private void ResetOcspResponderUrl()
```

##### `ResetOcspRevalidateTime` <a name="ResetOcspRevalidateTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspRevalidateTime"></a>

```csharp
private void ResetOcspRevalidateTime()
```

##### `ResetOcspServerName` <a name="ResetOcspServerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspServerName"></a>

```csharp
private void ResetOcspServerName()
```

##### `ResetOcspTrustCertChain` <a name="ResetOcspTrustCertChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOcspTrustCertChain"></a>

```csharp
private void ResetOcspTrustCertChain()
```

##### `ResetOtherCertMatchAttribute` <a name="ResetOtherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resetOtherCertMatchAttribute"></a>

```csharp
private void ResetOtherCertMatchAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttributeInput">CertMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabledInput">CrlCheckOnOcspFailureEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabledInput">CrlEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocationInput">CrlLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDurationInput">CrlReloadDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabledInput">EkuValidationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValuesInput">EkuValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatusInput">OcspAllowUnknownResponseStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabledInput">OcspEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponseInput">OcspEnableSignedResponseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrlInput">OcspResponderUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTimeInput">OcspRevalidateTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerNameInput">OcspServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChainInput">OcspTrustCertChainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttributeInput">OtherCertMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChainInput">SigningCertificateChainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttributeInput">UserMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute">CertMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled">CrlEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation">CrlLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration">CrlReloadDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled">EkuValidationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues">EkuValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus">OcspAllowUnknownResponseStatus</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled">OcspEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse">OcspEnableSignedResponse</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime">OcspRevalidateTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName">OcspServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain">OcspTrustCertChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute">OtherCertMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain">SigningCertificateChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute">UserMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertMatchAttributeInput`<sup>Optional</sup> <a name="CertMatchAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttributeInput"></a>

```csharp
public string CertMatchAttributeInput { get; }
```

- *Type:* string

---

##### `CrlCheckOnOcspFailureEnabledInput`<sup>Optional</sup> <a name="CrlCheckOnOcspFailureEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabledInput"></a>

```csharp
public object CrlCheckOnOcspFailureEnabledInput { get; }
```

- *Type:* object

---

##### `CrlEnabledInput`<sup>Optional</sup> <a name="CrlEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabledInput"></a>

```csharp
public object CrlEnabledInput { get; }
```

- *Type:* object

---

##### `CrlLocationInput`<sup>Optional</sup> <a name="CrlLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocationInput"></a>

```csharp
public string CrlLocationInput { get; }
```

- *Type:* string

---

##### `CrlReloadDurationInput`<sup>Optional</sup> <a name="CrlReloadDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDurationInput"></a>

```csharp
public double CrlReloadDurationInput { get; }
```

- *Type:* double

---

##### `EkuValidationEnabledInput`<sup>Optional</sup> <a name="EkuValidationEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabledInput"></a>

```csharp
public object EkuValidationEnabledInput { get; }
```

- *Type:* object

---

##### `EkuValuesInput`<sup>Optional</sup> <a name="EkuValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValuesInput"></a>

```csharp
public string[] EkuValuesInput { get; }
```

- *Type:* string[]

---

##### `OcspAllowUnknownResponseStatusInput`<sup>Optional</sup> <a name="OcspAllowUnknownResponseStatusInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatusInput"></a>

```csharp
public object OcspAllowUnknownResponseStatusInput { get; }
```

- *Type:* object

---

##### `OcspEnabledInput`<sup>Optional</sup> <a name="OcspEnabledInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabledInput"></a>

```csharp
public object OcspEnabledInput { get; }
```

- *Type:* object

---

##### `OcspEnableSignedResponseInput`<sup>Optional</sup> <a name="OcspEnableSignedResponseInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponseInput"></a>

```csharp
public object OcspEnableSignedResponseInput { get; }
```

- *Type:* object

---

##### `OcspResponderUrlInput`<sup>Optional</sup> <a name="OcspResponderUrlInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrlInput"></a>

```csharp
public string OcspResponderUrlInput { get; }
```

- *Type:* string

---

##### `OcspRevalidateTimeInput`<sup>Optional</sup> <a name="OcspRevalidateTimeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTimeInput"></a>

```csharp
public double OcspRevalidateTimeInput { get; }
```

- *Type:* double

---

##### `OcspServerNameInput`<sup>Optional</sup> <a name="OcspServerNameInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerNameInput"></a>

```csharp
public string OcspServerNameInput { get; }
```

- *Type:* string

---

##### `OcspTrustCertChainInput`<sup>Optional</sup> <a name="OcspTrustCertChainInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChainInput"></a>

```csharp
public string[] OcspTrustCertChainInput { get; }
```

- *Type:* string[]

---

##### `OtherCertMatchAttributeInput`<sup>Optional</sup> <a name="OtherCertMatchAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttributeInput"></a>

```csharp
public string OtherCertMatchAttributeInput { get; }
```

- *Type:* string

---

##### `SigningCertificateChainInput`<sup>Optional</sup> <a name="SigningCertificateChainInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChainInput"></a>

```csharp
public string[] SigningCertificateChainInput { get; }
```

- *Type:* string[]

---

##### `UserMatchAttributeInput`<sup>Optional</sup> <a name="UserMatchAttributeInput" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttributeInput"></a>

```csharp
public string UserMatchAttributeInput { get; }
```

- *Type:* string

---

##### `CertMatchAttribute`<sup>Required</sup> <a name="CertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute"></a>

```csharp
public string CertMatchAttribute { get; }
```

- *Type:* string

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```csharp
public object CrlCheckOnOcspFailureEnabled { get; }
```

- *Type:* object

---

##### `CrlEnabled`<sup>Required</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled"></a>

```csharp
public object CrlEnabled { get; }
```

- *Type:* object

---

##### `CrlLocation`<sup>Required</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation"></a>

```csharp
public string CrlLocation { get; }
```

- *Type:* string

---

##### `CrlReloadDuration`<sup>Required</sup> <a name="CrlReloadDuration" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration"></a>

```csharp
public double CrlReloadDuration { get; }
```

- *Type:* double

---

##### `EkuValidationEnabled`<sup>Required</sup> <a name="EkuValidationEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled"></a>

```csharp
public object EkuValidationEnabled { get; }
```

- *Type:* object

---

##### `EkuValues`<sup>Required</sup> <a name="EkuValues" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues"></a>

```csharp
public string[] EkuValues { get; }
```

- *Type:* string[]

---

##### `OcspAllowUnknownResponseStatus`<sup>Required</sup> <a name="OcspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus"></a>

```csharp
public object OcspAllowUnknownResponseStatus { get; }
```

- *Type:* object

---

##### `OcspEnabled`<sup>Required</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled"></a>

```csharp
public object OcspEnabled { get; }
```

- *Type:* object

---

##### `OcspEnableSignedResponse`<sup>Required</sup> <a name="OcspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse"></a>

```csharp
public object OcspEnableSignedResponse { get; }
```

- *Type:* object

---

##### `OcspResponderUrl`<sup>Required</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl"></a>

```csharp
public string OcspResponderUrl { get; }
```

- *Type:* string

---

##### `OcspRevalidateTime`<sup>Required</sup> <a name="OcspRevalidateTime" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime"></a>

```csharp
public double OcspRevalidateTime { get; }
```

- *Type:* double

---

##### `OcspServerName`<sup>Required</sup> <a name="OcspServerName" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName"></a>

```csharp
public string OcspServerName { get; }
```

- *Type:* string

---

##### `OcspTrustCertChain`<sup>Required</sup> <a name="OcspTrustCertChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain"></a>

```csharp
public string[] OcspTrustCertChain { get; }
```

- *Type:* string[]

---

##### `OtherCertMatchAttribute`<sup>Required</sup> <a name="OtherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute"></a>

```csharp
public string OtherCertMatchAttribute { get; }
```

- *Type:* string

---

##### `SigningCertificateChain`<sup>Required</sup> <a name="SigningCertificateChain" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain"></a>

```csharp
public string[] SigningCertificateChain { get; }
```

- *Type:* string[]

---

##### `UserMatchAttribute`<sup>Required</sup> <a name="UserMatchAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute"></a>

```csharp
public string UserMatchAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue"></a>

```csharp
public IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsIdentityProvider.IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">IdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---



