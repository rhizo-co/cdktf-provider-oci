# `identityDomainsPasswordPolicy` Submodule <a name="`identityDomainsPasswordPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityDomainsPasswordPolicy <a name="IdentityDomainsPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy oci_identity_domains_password_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy(scope: Construct, id: string, config: IdentityDomainsPasswordPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig">IdentityDomainsPasswordPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig">IdentityDomainsPasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups">putGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars">resetAllowedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter">resetDictionaryDelimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation">resetDictionaryLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed">resetDictionaryWordDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars">resetDisallowedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings">resetDisallowedSubstrings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues">resetDisallowedUserAttributeValues</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters">resetDistinctCharacters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed">resetFirstNameDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset">resetForcePasswordReset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed">resetLastNameDisallowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration">resetLockoutDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts">resetMaxIncorrectAttempts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars">resetMaxRepeatedChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars">resetMaxSpecialChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals">resetMinAlphaNumerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas">resetMinAlphas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase">resetMinLowerCase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals">resetMinNumerals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge">resetMinPasswordAge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars">resetMinSpecialChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars">resetMinUniqueChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase">resetMinUpperCase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory">resetNumPasswordsInHistory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid">resetOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter">resetPasswordExpiresAfter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning">resetPasswordExpireWarning</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength">resetPasswordStrength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars">resetRequiredChars</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet">resetStartsWithAlphabet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed">resetUserNameDisallowed</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroups` <a name="putGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups"></a>

```typescript
public putGroups(value: IResolvable | IdentityDomainsPasswordPolicyGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>[]

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags"></a>

```typescript
public putTags(value: IResolvable | IdentityDomainsPasswordPolicyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityDomainsPasswordPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

---

##### `resetAllowedChars` <a name="resetAllowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAllowedChars"></a>

```typescript
public resetAllowedChars(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDictionaryDelimiter` <a name="resetDictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryDelimiter"></a>

```typescript
public resetDictionaryDelimiter(): void
```

##### `resetDictionaryLocation` <a name="resetDictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryLocation"></a>

```typescript
public resetDictionaryLocation(): void
```

##### `resetDictionaryWordDisallowed` <a name="resetDictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDictionaryWordDisallowed"></a>

```typescript
public resetDictionaryWordDisallowed(): void
```

##### `resetDisallowedChars` <a name="resetDisallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedChars"></a>

```typescript
public resetDisallowedChars(): void
```

##### `resetDisallowedSubstrings` <a name="resetDisallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedSubstrings"></a>

```typescript
public resetDisallowedSubstrings(): void
```

##### `resetDisallowedUserAttributeValues` <a name="resetDisallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDisallowedUserAttributeValues"></a>

```typescript
public resetDisallowedUserAttributeValues(): void
```

##### `resetDistinctCharacters` <a name="resetDistinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetDistinctCharacters"></a>

```typescript
public resetDistinctCharacters(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetFirstNameDisallowed` <a name="resetFirstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetFirstNameDisallowed"></a>

```typescript
public resetFirstNameDisallowed(): void
```

##### `resetForcePasswordReset` <a name="resetForcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetForcePasswordReset"></a>

```typescript
public resetForcePasswordReset(): void
```

##### `resetGroups` <a name="resetGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetLastNameDisallowed` <a name="resetLastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLastNameDisallowed"></a>

```typescript
public resetLastNameDisallowed(): void
```

##### `resetLockoutDuration` <a name="resetLockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetLockoutDuration"></a>

```typescript
public resetLockoutDuration(): void
```

##### `resetMaxIncorrectAttempts` <a name="resetMaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxIncorrectAttempts"></a>

```typescript
public resetMaxIncorrectAttempts(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMaxRepeatedChars` <a name="resetMaxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxRepeatedChars"></a>

```typescript
public resetMaxRepeatedChars(): void
```

##### `resetMaxSpecialChars` <a name="resetMaxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMaxSpecialChars"></a>

```typescript
public resetMaxSpecialChars(): void
```

##### `resetMinAlphaNumerals` <a name="resetMinAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphaNumerals"></a>

```typescript
public resetMinAlphaNumerals(): void
```

##### `resetMinAlphas` <a name="resetMinAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinAlphas"></a>

```typescript
public resetMinAlphas(): void
```

##### `resetMinLength` <a name="resetMinLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLength"></a>

```typescript
public resetMinLength(): void
```

##### `resetMinLowerCase` <a name="resetMinLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinLowerCase"></a>

```typescript
public resetMinLowerCase(): void
```

##### `resetMinNumerals` <a name="resetMinNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinNumerals"></a>

```typescript
public resetMinNumerals(): void
```

##### `resetMinPasswordAge` <a name="resetMinPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinPasswordAge"></a>

```typescript
public resetMinPasswordAge(): void
```

##### `resetMinSpecialChars` <a name="resetMinSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinSpecialChars"></a>

```typescript
public resetMinSpecialChars(): void
```

##### `resetMinUniqueChars` <a name="resetMinUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUniqueChars"></a>

```typescript
public resetMinUniqueChars(): void
```

##### `resetMinUpperCase` <a name="resetMinUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetMinUpperCase"></a>

```typescript
public resetMinUpperCase(): void
```

##### `resetNumPasswordsInHistory` <a name="resetNumPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetNumPasswordsInHistory"></a>

```typescript
public resetNumPasswordsInHistory(): void
```

##### `resetOcid` <a name="resetOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetOcid"></a>

```typescript
public resetOcid(): void
```

##### `resetPasswordExpiresAfter` <a name="resetPasswordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpiresAfter"></a>

```typescript
public resetPasswordExpiresAfter(): void
```

##### `resetPasswordExpireWarning` <a name="resetPasswordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordExpireWarning"></a>

```typescript
public resetPasswordExpireWarning(): void
```

##### `resetPasswordStrength` <a name="resetPasswordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPasswordStrength"></a>

```typescript
public resetPasswordStrength(): void
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetRequiredChars` <a name="resetRequiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetRequiredChars"></a>

```typescript
public resetRequiredChars(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetStartsWithAlphabet` <a name="resetStartsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetStartsWithAlphabet"></a>

```typescript
public resetStartsWithAlphabet(): void
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserNameDisallowed` <a name="resetUserNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.resetUserNameDisallowed"></a>

```typescript
public resetUserNameDisallowed(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityDomainsPasswordPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityDomainsPasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityDomainsPasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules">configuredPasswordPolicyRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput">allowedCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput">dictionaryDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput">dictionaryLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput">dictionaryWordDisallowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput">disallowedCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput">disallowedSubstringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput">disallowedUserAttributeValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput">distinctCharactersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput">firstNameDisallowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput">forcePasswordResetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput">groupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput">lastNameDisallowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput">lockoutDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput">maxIncorrectAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput">maxRepeatedCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput">maxSpecialCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput">minAlphaNumeralsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput">minAlphasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput">minLowerCaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput">minNumeralsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput">minPasswordAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput">minSpecialCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput">minUniqueCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput">minUpperCaseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput">numPasswordsInHistoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput">ocidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput">passwordExpiresAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput">passwordExpireWarningInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput">passwordStrengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput">requiredCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput">schemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput">startsWithAlphabetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput">userNameDisallowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars">allowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter">dictionaryDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation">dictionaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed">dictionaryWordDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars">disallowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings">disallowedSubstrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues">disallowedUserAttributeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters">distinctCharacters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed">firstNameDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset">forcePasswordReset</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed">lastNameDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration">lockoutDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars">maxRepeatedChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars">maxSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals">minAlphaNumerals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas">minAlphas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase">minLowerCase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals">minNumerals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge">minPasswordAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars">minSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars">minUniqueChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase">minUpperCase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory">numPasswordsInHistory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter">passwordExpiresAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning">passwordExpireWarning</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength">passwordStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars">requiredChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet">startsWithAlphabet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed">userNameDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `configuredPasswordPolicyRules`<sup>Required</sup> <a name="configuredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules"></a>

```typescript
public readonly configuredPasswordPolicyRules: IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groups"></a>

```typescript
public readonly groups: IdentityDomainsPasswordPolicyGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList">IdentityDomainsPasswordPolicyGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: IdentityDomainsPasswordPolicyIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList">IdentityDomainsPasswordPolicyIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: IdentityDomainsPasswordPolicyIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList">IdentityDomainsPasswordPolicyIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.meta"></a>

```typescript
public readonly meta: IdentityDomainsPasswordPolicyMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList">IdentityDomainsPasswordPolicyMetaList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tags"></a>

```typescript
public readonly tags: IdentityDomainsPasswordPolicyTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList">IdentityDomainsPasswordPolicyTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsPasswordPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference">IdentityDomainsPasswordPolicyTimeoutsOutputReference</a>

---

##### `allowedCharsInput`<sup>Optional</sup> <a name="allowedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedCharsInput"></a>

```typescript
public readonly allowedCharsInput: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dictionaryDelimiterInput`<sup>Optional</sup> <a name="dictionaryDelimiterInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiterInput"></a>

```typescript
public readonly dictionaryDelimiterInput: string;
```

- *Type:* string

---

##### `dictionaryLocationInput`<sup>Optional</sup> <a name="dictionaryLocationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocationInput"></a>

```typescript
public readonly dictionaryLocationInput: string;
```

- *Type:* string

---

##### `dictionaryWordDisallowedInput`<sup>Optional</sup> <a name="dictionaryWordDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowedInput"></a>

```typescript
public readonly dictionaryWordDisallowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disallowedCharsInput`<sup>Optional</sup> <a name="disallowedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedCharsInput"></a>

```typescript
public readonly disallowedCharsInput: string;
```

- *Type:* string

---

##### `disallowedSubstringsInput`<sup>Optional</sup> <a name="disallowedSubstringsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstringsInput"></a>

```typescript
public readonly disallowedSubstringsInput: string[];
```

- *Type:* string[]

---

##### `disallowedUserAttributeValuesInput`<sup>Optional</sup> <a name="disallowedUserAttributeValuesInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValuesInput"></a>

```typescript
public readonly disallowedUserAttributeValuesInput: string[];
```

- *Type:* string[]

---

##### `distinctCharactersInput`<sup>Optional</sup> <a name="distinctCharactersInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharactersInput"></a>

```typescript
public readonly distinctCharactersInput: number;
```

- *Type:* number

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `firstNameDisallowedInput`<sup>Optional</sup> <a name="firstNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowedInput"></a>

```typescript
public readonly firstNameDisallowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forcePasswordResetInput`<sup>Optional</sup> <a name="forcePasswordResetInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordResetInput"></a>

```typescript
public readonly forcePasswordResetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.groupsInput"></a>

```typescript
public readonly groupsInput: IResolvable | IdentityDomainsPasswordPolicyGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>[]

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `lastNameDisallowedInput`<sup>Optional</sup> <a name="lastNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowedInput"></a>

```typescript
public readonly lastNameDisallowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lockoutDurationInput`<sup>Optional</sup> <a name="lockoutDurationInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDurationInput"></a>

```typescript
public readonly lockoutDurationInput: number;
```

- *Type:* number

---

##### `maxIncorrectAttemptsInput`<sup>Optional</sup> <a name="maxIncorrectAttemptsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttemptsInput"></a>

```typescript
public readonly maxIncorrectAttemptsInput: number;
```

- *Type:* number

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `maxRepeatedCharsInput`<sup>Optional</sup> <a name="maxRepeatedCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedCharsInput"></a>

```typescript
public readonly maxRepeatedCharsInput: number;
```

- *Type:* number

---

##### `maxSpecialCharsInput`<sup>Optional</sup> <a name="maxSpecialCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialCharsInput"></a>

```typescript
public readonly maxSpecialCharsInput: number;
```

- *Type:* number

---

##### `minAlphaNumeralsInput`<sup>Optional</sup> <a name="minAlphaNumeralsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumeralsInput"></a>

```typescript
public readonly minAlphaNumeralsInput: number;
```

- *Type:* number

---

##### `minAlphasInput`<sup>Optional</sup> <a name="minAlphasInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphasInput"></a>

```typescript
public readonly minAlphasInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `minLowerCaseInput`<sup>Optional</sup> <a name="minLowerCaseInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCaseInput"></a>

```typescript
public readonly minLowerCaseInput: number;
```

- *Type:* number

---

##### `minNumeralsInput`<sup>Optional</sup> <a name="minNumeralsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumeralsInput"></a>

```typescript
public readonly minNumeralsInput: number;
```

- *Type:* number

---

##### `minPasswordAgeInput`<sup>Optional</sup> <a name="minPasswordAgeInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAgeInput"></a>

```typescript
public readonly minPasswordAgeInput: number;
```

- *Type:* number

---

##### `minSpecialCharsInput`<sup>Optional</sup> <a name="minSpecialCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialCharsInput"></a>

```typescript
public readonly minSpecialCharsInput: number;
```

- *Type:* number

---

##### `minUniqueCharsInput`<sup>Optional</sup> <a name="minUniqueCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueCharsInput"></a>

```typescript
public readonly minUniqueCharsInput: number;
```

- *Type:* number

---

##### `minUpperCaseInput`<sup>Optional</sup> <a name="minUpperCaseInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCaseInput"></a>

```typescript
public readonly minUpperCaseInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numPasswordsInHistoryInput`<sup>Optional</sup> <a name="numPasswordsInHistoryInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistoryInput"></a>

```typescript
public readonly numPasswordsInHistoryInput: number;
```

- *Type:* number

---

##### `ocidInput`<sup>Optional</sup> <a name="ocidInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocidInput"></a>

```typescript
public readonly ocidInput: string;
```

- *Type:* string

---

##### `passwordExpiresAfterInput`<sup>Optional</sup> <a name="passwordExpiresAfterInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfterInput"></a>

```typescript
public readonly passwordExpiresAfterInput: number;
```

- *Type:* number

---

##### `passwordExpireWarningInput`<sup>Optional</sup> <a name="passwordExpireWarningInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarningInput"></a>

```typescript
public readonly passwordExpireWarningInput: number;
```

- *Type:* number

---

##### `passwordStrengthInput`<sup>Optional</sup> <a name="passwordStrengthInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrengthInput"></a>

```typescript
public readonly passwordStrengthInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `requiredCharsInput`<sup>Optional</sup> <a name="requiredCharsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredCharsInput"></a>

```typescript
public readonly requiredCharsInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `schemasInput`<sup>Optional</sup> <a name="schemasInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemasInput"></a>

```typescript
public readonly schemasInput: string[];
```

- *Type:* string[]

---

##### `startsWithAlphabetInput`<sup>Optional</sup> <a name="startsWithAlphabetInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabetInput"></a>

```typescript
public readonly startsWithAlphabetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IdentityDomainsPasswordPolicyTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityDomainsPasswordPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

---

##### `userNameDisallowedInput`<sup>Optional</sup> <a name="userNameDisallowedInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowedInput"></a>

```typescript
public readonly userNameDisallowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedChars`<sup>Required</sup> <a name="allowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.allowedChars"></a>

```typescript
public readonly allowedChars: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dictionaryDelimiter`<sup>Required</sup> <a name="dictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryDelimiter"></a>

```typescript
public readonly dictionaryDelimiter: string;
```

- *Type:* string

---

##### `dictionaryLocation`<sup>Required</sup> <a name="dictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryLocation"></a>

```typescript
public readonly dictionaryLocation: string;
```

- *Type:* string

---

##### `dictionaryWordDisallowed`<sup>Required</sup> <a name="dictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed"></a>

```typescript
public readonly dictionaryWordDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disallowedChars`<sup>Required</sup> <a name="disallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedChars"></a>

```typescript
public readonly disallowedChars: string;
```

- *Type:* string

---

##### `disallowedSubstrings`<sup>Required</sup> <a name="disallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedSubstrings"></a>

```typescript
public readonly disallowedSubstrings: string[];
```

- *Type:* string[]

---

##### `disallowedUserAttributeValues`<sup>Required</sup> <a name="disallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues"></a>

```typescript
public readonly disallowedUserAttributeValues: string[];
```

- *Type:* string[]

---

##### `distinctCharacters`<sup>Required</sup> <a name="distinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.distinctCharacters"></a>

```typescript
public readonly distinctCharacters: number;
```

- *Type:* number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `firstNameDisallowed`<sup>Required</sup> <a name="firstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.firstNameDisallowed"></a>

```typescript
public readonly firstNameDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forcePasswordReset`<sup>Required</sup> <a name="forcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.forcePasswordReset"></a>

```typescript
public readonly forcePasswordReset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `lastNameDisallowed`<sup>Required</sup> <a name="lastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lastNameDisallowed"></a>

```typescript
public readonly lastNameDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: number;
```

- *Type:* number

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxIncorrectAttempts"></a>

```typescript
public readonly maxIncorrectAttempts: number;
```

- *Type:* number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `maxRepeatedChars`<sup>Required</sup> <a name="maxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxRepeatedChars"></a>

```typescript
public readonly maxRepeatedChars: number;
```

- *Type:* number

---

##### `maxSpecialChars`<sup>Required</sup> <a name="maxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.maxSpecialChars"></a>

```typescript
public readonly maxSpecialChars: number;
```

- *Type:* number

---

##### `minAlphaNumerals`<sup>Required</sup> <a name="minAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphaNumerals"></a>

```typescript
public readonly minAlphaNumerals: number;
```

- *Type:* number

---

##### `minAlphas`<sup>Required</sup> <a name="minAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minAlphas"></a>

```typescript
public readonly minAlphas: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `minLowerCase`<sup>Required</sup> <a name="minLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minLowerCase"></a>

```typescript
public readonly minLowerCase: number;
```

- *Type:* number

---

##### `minNumerals`<sup>Required</sup> <a name="minNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minNumerals"></a>

```typescript
public readonly minNumerals: number;
```

- *Type:* number

---

##### `minPasswordAge`<sup>Required</sup> <a name="minPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minPasswordAge"></a>

```typescript
public readonly minPasswordAge: number;
```

- *Type:* number

---

##### `minSpecialChars`<sup>Required</sup> <a name="minSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minSpecialChars"></a>

```typescript
public readonly minSpecialChars: number;
```

- *Type:* number

---

##### `minUniqueChars`<sup>Required</sup> <a name="minUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUniqueChars"></a>

```typescript
public readonly minUniqueChars: number;
```

- *Type:* number

---

##### `minUpperCase`<sup>Required</sup> <a name="minUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.minUpperCase"></a>

```typescript
public readonly minUpperCase: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numPasswordsInHistory`<sup>Required</sup> <a name="numPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.numPasswordsInHistory"></a>

```typescript
public readonly numPasswordsInHistory: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `passwordExpiresAfter`<sup>Required</sup> <a name="passwordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpiresAfter"></a>

```typescript
public readonly passwordExpiresAfter: number;
```

- *Type:* number

---

##### `passwordExpireWarning`<sup>Required</sup> <a name="passwordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordExpireWarning"></a>

```typescript
public readonly passwordExpireWarning: number;
```

- *Type:* number

---

##### `passwordStrength`<sup>Required</sup> <a name="passwordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.passwordStrength"></a>

```typescript
public readonly passwordStrength: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `requiredChars`<sup>Required</sup> <a name="requiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.requiredChars"></a>

```typescript
public readonly requiredChars: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startsWithAlphabet`<sup>Required</sup> <a name="startsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.startsWithAlphabet"></a>

```typescript
public readonly startsWithAlphabet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userNameDisallowed`<sup>Required</sup> <a name="userNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.userNameDisallowed"></a>

```typescript
public readonly userNameDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityDomainsPasswordPolicyConfig <a name="IdentityDomainsPasswordPolicyConfig" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyConfig: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas">schemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars">allowedChars</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter">dictionaryDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation">dictionaryLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed">dictionaryWordDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars">disallowedChars</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings">disallowedSubstrings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues">disallowedUserAttributeValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters">distinctCharacters</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed">firstNameDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset">forcePasswordReset</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups">groups</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>[]</code> | groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed">lastNameDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration">lockoutDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength">maxLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars">maxRepeatedChars</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars">maxSpecialChars</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals">minAlphaNumerals</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas">minAlphas</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength">minLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase">minLowerCase</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals">minNumerals</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge">minPasswordAge</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars">minSpecialChars</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars">minUniqueChars</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase">minUpperCase</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory">numPasswordsInHistory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid">ocid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter">passwordExpiresAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning">passwordExpireWarning</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength">passwordStrength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars">requiredChars</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet">startsWithAlphabet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>[]</code> | tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed">userNameDisallowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#idcs_endpoint IdentityDomainsPasswordPolicy#idcs_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#name IdentityDomainsPasswordPolicy#name}.

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#schemas IdentityDomainsPasswordPolicy#schemas}.

---

##### `allowedChars`<sup>Optional</sup> <a name="allowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.allowedChars"></a>

```typescript
public readonly allowedChars: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#allowed_chars IdentityDomainsPasswordPolicy#allowed_chars}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attributes IdentityDomainsPasswordPolicy#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#attribute_sets IdentityDomainsPasswordPolicy#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#authorization IdentityDomainsPasswordPolicy#authorization}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#description IdentityDomainsPasswordPolicy#description}.

---

##### `dictionaryDelimiter`<sup>Optional</sup> <a name="dictionaryDelimiter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryDelimiter"></a>

```typescript
public readonly dictionaryDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_delimiter IdentityDomainsPasswordPolicy#dictionary_delimiter}.

---

##### `dictionaryLocation`<sup>Optional</sup> <a name="dictionaryLocation" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryLocation"></a>

```typescript
public readonly dictionaryLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_location IdentityDomainsPasswordPolicy#dictionary_location}.

---

##### `dictionaryWordDisallowed`<sup>Optional</sup> <a name="dictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.dictionaryWordDisallowed"></a>

```typescript
public readonly dictionaryWordDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#dictionary_word_disallowed IdentityDomainsPasswordPolicy#dictionary_word_disallowed}.

---

##### `disallowedChars`<sup>Optional</sup> <a name="disallowedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedChars"></a>

```typescript
public readonly disallowedChars: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_chars IdentityDomainsPasswordPolicy#disallowed_chars}.

---

##### `disallowedSubstrings`<sup>Optional</sup> <a name="disallowedSubstrings" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedSubstrings"></a>

```typescript
public readonly disallowedSubstrings: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_substrings IdentityDomainsPasswordPolicy#disallowed_substrings}.

---

##### `disallowedUserAttributeValues`<sup>Optional</sup> <a name="disallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.disallowedUserAttributeValues"></a>

```typescript
public readonly disallowedUserAttributeValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#disallowed_user_attribute_values IdentityDomainsPasswordPolicy#disallowed_user_attribute_values}.

---

##### `distinctCharacters`<sup>Optional</sup> <a name="distinctCharacters" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.distinctCharacters"></a>

```typescript
public readonly distinctCharacters: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#distinct_characters IdentityDomainsPasswordPolicy#distinct_characters}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#external_id IdentityDomainsPasswordPolicy#external_id}.

---

##### `firstNameDisallowed`<sup>Optional</sup> <a name="firstNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.firstNameDisallowed"></a>

```typescript
public readonly firstNameDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#first_name_disallowed IdentityDomainsPasswordPolicy#first_name_disallowed}.

---

##### `forcePasswordReset`<sup>Optional</sup> <a name="forcePasswordReset" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.forcePasswordReset"></a>

```typescript
public readonly forcePasswordReset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#force_password_reset IdentityDomainsPasswordPolicy#force_password_reset}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.groups"></a>

```typescript
public readonly groups: IResolvable | IdentityDomainsPasswordPolicyGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>[]

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#groups IdentityDomainsPasswordPolicy#groups}

---

##### `lastNameDisallowed`<sup>Optional</sup> <a name="lastNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lastNameDisallowed"></a>

```typescript
public readonly lastNameDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#last_name_disallowed IdentityDomainsPasswordPolicy#last_name_disallowed}.

---

##### `lockoutDuration`<sup>Optional</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#lockout_duration IdentityDomainsPasswordPolicy#lockout_duration}.

---

##### `maxIncorrectAttempts`<sup>Optional</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxIncorrectAttempts"></a>

```typescript
public readonly maxIncorrectAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_incorrect_attempts IdentityDomainsPasswordPolicy#max_incorrect_attempts}.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_length IdentityDomainsPasswordPolicy#max_length}.

---

##### `maxRepeatedChars`<sup>Optional</sup> <a name="maxRepeatedChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxRepeatedChars"></a>

```typescript
public readonly maxRepeatedChars: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_repeated_chars IdentityDomainsPasswordPolicy#max_repeated_chars}.

---

##### `maxSpecialChars`<sup>Optional</sup> <a name="maxSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.maxSpecialChars"></a>

```typescript
public readonly maxSpecialChars: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#max_special_chars IdentityDomainsPasswordPolicy#max_special_chars}.

---

##### `minAlphaNumerals`<sup>Optional</sup> <a name="minAlphaNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphaNumerals"></a>

```typescript
public readonly minAlphaNumerals: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alpha_numerals IdentityDomainsPasswordPolicy#min_alpha_numerals}.

---

##### `minAlphas`<sup>Optional</sup> <a name="minAlphas" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minAlphas"></a>

```typescript
public readonly minAlphas: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_alphas IdentityDomainsPasswordPolicy#min_alphas}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_length IdentityDomainsPasswordPolicy#min_length}.

---

##### `minLowerCase`<sup>Optional</sup> <a name="minLowerCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minLowerCase"></a>

```typescript
public readonly minLowerCase: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_lower_case IdentityDomainsPasswordPolicy#min_lower_case}.

---

##### `minNumerals`<sup>Optional</sup> <a name="minNumerals" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minNumerals"></a>

```typescript
public readonly minNumerals: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_numerals IdentityDomainsPasswordPolicy#min_numerals}.

---

##### `minPasswordAge`<sup>Optional</sup> <a name="minPasswordAge" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minPasswordAge"></a>

```typescript
public readonly minPasswordAge: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_password_age IdentityDomainsPasswordPolicy#min_password_age}.

---

##### `minSpecialChars`<sup>Optional</sup> <a name="minSpecialChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minSpecialChars"></a>

```typescript
public readonly minSpecialChars: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_special_chars IdentityDomainsPasswordPolicy#min_special_chars}.

---

##### `minUniqueChars`<sup>Optional</sup> <a name="minUniqueChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUniqueChars"></a>

```typescript
public readonly minUniqueChars: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_unique_chars IdentityDomainsPasswordPolicy#min_unique_chars}.

---

##### `minUpperCase`<sup>Optional</sup> <a name="minUpperCase" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.minUpperCase"></a>

```typescript
public readonly minUpperCase: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#min_upper_case IdentityDomainsPasswordPolicy#min_upper_case}.

---

##### `numPasswordsInHistory`<sup>Optional</sup> <a name="numPasswordsInHistory" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.numPasswordsInHistory"></a>

```typescript
public readonly numPasswordsInHistory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#num_passwords_in_history IdentityDomainsPasswordPolicy#num_passwords_in_history}.

---

##### `ocid`<sup>Optional</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#ocid IdentityDomainsPasswordPolicy#ocid}.

---

##### `passwordExpiresAfter`<sup>Optional</sup> <a name="passwordExpiresAfter" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpiresAfter"></a>

```typescript
public readonly passwordExpiresAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expires_after IdentityDomainsPasswordPolicy#password_expires_after}.

---

##### `passwordExpireWarning`<sup>Optional</sup> <a name="passwordExpireWarning" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordExpireWarning"></a>

```typescript
public readonly passwordExpireWarning: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_expire_warning IdentityDomainsPasswordPolicy#password_expire_warning}.

---

##### `passwordStrength`<sup>Optional</sup> <a name="passwordStrength" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.passwordStrength"></a>

```typescript
public readonly passwordStrength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#password_strength IdentityDomainsPasswordPolicy#password_strength}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#priority IdentityDomainsPasswordPolicy#priority}.

---

##### `requiredChars`<sup>Optional</sup> <a name="requiredChars" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.requiredChars"></a>

```typescript
public readonly requiredChars: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#required_chars IdentityDomainsPasswordPolicy#required_chars}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#resource_type_schema_version IdentityDomainsPasswordPolicy#resource_type_schema_version}.

---

##### `startsWithAlphabet`<sup>Optional</sup> <a name="startsWithAlphabet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.startsWithAlphabet"></a>

```typescript
public readonly startsWithAlphabet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#starts_with_alphabet IdentityDomainsPasswordPolicy#starts_with_alphabet}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IdentityDomainsPasswordPolicyTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#tags IdentityDomainsPasswordPolicy#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityDomainsPasswordPolicyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#timeouts IdentityDomainsPasswordPolicy#timeouts}

---

##### `userNameDisallowed`<sup>Optional</sup> <a name="userNameDisallowed" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfig.property.userNameDisallowed"></a>

```typescript
public readonly userNameDisallowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#user_name_disallowed IdentityDomainsPasswordPolicy#user_name_disallowed}.

---

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyConfiguredPasswordPolicyRules: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules = { ... }
```


### IdentityDomainsPasswordPolicyGroups <a name="IdentityDomainsPasswordPolicyGroups" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyGroups: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyIdcsCreatedBy <a name="IdentityDomainsPasswordPolicyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyIdcsCreatedBy: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy = { ... }
```


### IdentityDomainsPasswordPolicyIdcsLastModifiedBy <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyIdcsLastModifiedBy: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy = { ... }
```


### IdentityDomainsPasswordPolicyMeta <a name="IdentityDomainsPasswordPolicyMeta" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyMeta: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta = { ... }
```


### IdentityDomainsPasswordPolicyTags <a name="IdentityDomainsPasswordPolicyTags" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyTags: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#key IdentityDomainsPasswordPolicy#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#value IdentityDomainsPasswordPolicy#value}.

---

### IdentityDomainsPasswordPolicyTimeouts <a name="IdentityDomainsPasswordPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const identityDomainsPasswordPolicyTimeouts: identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#create IdentityDomainsPasswordPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#delete IdentityDomainsPasswordPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_domains_password_policy#update IdentityDomainsPasswordPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get"></a>

```typescript
public get(index: number): IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference <a name="IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">IdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a>

---


### IdentityDomainsPasswordPolicyGroupsList <a name="IdentityDomainsPasswordPolicyGroupsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get"></a>

```typescript
public get(index: number): IdentityDomainsPasswordPolicyGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsPasswordPolicyGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>[]

---


### IdentityDomainsPasswordPolicyGroupsOutputReference <a name="IdentityDomainsPasswordPolicyGroupsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsPasswordPolicyGroups;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyGroups">IdentityDomainsPasswordPolicyGroups</a>

---


### IdentityDomainsPasswordPolicyIdcsCreatedByList <a name="IdentityDomainsPasswordPolicyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsPasswordPolicyIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsCreatedBy">IdentityDomainsPasswordPolicyIdcsCreatedBy</a>

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByList <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference <a name="IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsPasswordPolicyIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyIdcsLastModifiedBy">IdentityDomainsPasswordPolicyIdcsLastModifiedBy</a>

---


### IdentityDomainsPasswordPolicyMetaList <a name="IdentityDomainsPasswordPolicyMetaList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get"></a>

```typescript
public get(index: number): IdentityDomainsPasswordPolicyMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityDomainsPasswordPolicyMetaOutputReference <a name="IdentityDomainsPasswordPolicyMetaOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityDomainsPasswordPolicyMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyMeta">IdentityDomainsPasswordPolicyMeta</a>

---


### IdentityDomainsPasswordPolicyTagsList <a name="IdentityDomainsPasswordPolicyTagsList" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get"></a>

```typescript
public get(index: number): IdentityDomainsPasswordPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsPasswordPolicyTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>[]

---


### IdentityDomainsPasswordPolicyTagsOutputReference <a name="IdentityDomainsPasswordPolicyTagsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsPasswordPolicyTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTags">IdentityDomainsPasswordPolicyTags</a>

---


### IdentityDomainsPasswordPolicyTimeoutsOutputReference <a name="IdentityDomainsPasswordPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityDomainsPasswordPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityDomainsPasswordPolicy.IdentityDomainsPasswordPolicyTimeouts">IdentityDomainsPasswordPolicyTimeouts</a>

---



